import React, { useState, useEffect, useRef } from 'react';
import { 
  FaBook, 
  FaHeartbeat, 
  FaUtensils, 
  FaShower, 
  FaRunning,
  FaQuestionCircle,
  FaDog,
  FaCat,
  FaPaw,
  FaChartLine,
  FaNotesMedical,
  FaBirthdayCake,
  FaCalendarCheck,
  FaUserMd,
  FaHistory
} from 'react-icons/fa';
import { RiFirstAidKitFill, RiRobot2Line, RiMentalHealthLine } from 'react-icons/ri';
import { 
  BsChatDotsFill, 
  BsSend, 
  BsEmojiSmile, 
  BsPaperclip, 
  BsX, 
  BsMic, 
  BsTrash, 
  BsExclamationTriangle,
  BsCheckCircle
} from 'react-icons/bs';
import { HiChartBar } from 'react-icons/hi';
import './ChatBot.css';

// Sentiment analysis helpers
const positiveWords = ['happy', 'good', 'great', 'excellent', 'better', 'improved', 'love', 'well', 'healthy', 'playful', 'energetic', 'active'];
const negativeWords = ['sad', 'bad', 'awful', 'sick', 'ill', 'worse', 'worry', 'concerned', 'anxious', 'problem', 'issue', 'hurt', 'pain', 'dying', 'died'];
const urgentWords = ['emergency', 'help', 'urgent', 'immediately', 'bleeding', 'vomiting', 'poisoned', 'accident', 'choking', 'collapse', 'seizure'];

// Sample pet data for analysis and visualization
const samplePetData = {
  visits: [
    { date: '2024-01-15', type: 'Regular Check-up', weight: 24.5, notes: 'Healthy, vaccines updated' },
    { date: '2024-02-20', type: 'Dental Check', weight: 24.3, notes: 'Minor tartar build-up' },
    { date: '2024-03-25', type: 'Skin Issue', weight: 23.8, notes: 'Slight allergy, prescribed medication' },
    { date: '2024-04-28', type: 'Follow-up', weight: 24.7, notes: 'Recovered well from allergy' },
  ],
  activities: [
    { date: '2024-04-24', type: 'Walk', duration: 30, intensity: 'moderate' },
    { date: '2024-04-25', type: 'Play', duration: 45, intensity: 'high' },
    { date: '2024-04-26', type: 'Training', duration: 20, intensity: 'low' },
    { date: '2024-04-27', type: 'Walk', duration: 40, intensity: 'high' },
    { date: '2024-04-28', type: 'Play', duration: 25, intensity: 'moderate' },
  ],
  nutrition: [
    { date: '2024-04-24', calories: 850, protein: 'high', treats: 2 },
    { date: '2024-04-25', calories: 830, protein: 'medium', treats: 3 },
    { date: '2024-04-26', calories: 860, protein: 'high', treats: 1 },
    { date: '2024-04-27', calories: 840, protein: 'medium', treats: 2 },
    { date: '2024-04-28', calories: 850, protein: 'high', treats: 2 },
  ]
};

const ChatBot = () => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState(() => {
    // Load chat history from localStorage if available
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [petProfile, setPetProfile] = useState(() => {
    const savedProfile = localStorage.getItem('petProfile');
    return savedProfile ? JSON.parse(savedProfile) : null;
  });
  const [showPetProfileSetup, setShowPetProfileSetup] = useState(false);
  const [showDataVisualization, setShowDataVisualization] = useState(false);
  const [selectedVisualization, setSelectedVisualization] = useState('health');
  const [userSentiment, setUserSentiment] = useState('neutral');
  const [emergencyDetected, setEmergencyDetected] = useState(false);
  const [showAIInsight, setShowAIInsight] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState(null);

  const messageEndRef = useRef(null);
  const messageInputRef = useRef(null);
  const chatBodyRef = useRef(null);

  // Save chat messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  // Save pet profile to localStorage whenever it changes
  useEffect(() => {
    if (petProfile) {
      localStorage.setItem('petProfile', JSON.stringify(petProfile));
    }
  }, [petProfile]);

  // Categories for organization
  const categories = {
    training: "Training & Behavior",
    health: "Health & Wellness",
    food: "Nutrition & Diet",
    grooming: "Grooming & Hygiene",
    play: "Exercise & Play",
    emergency: "Emergency Care",
    dog: "Dog Specific",
    cat: "Cat Specific"
  };

  // Enhanced quick reply options with more context
  const quickReplies = [
    { text: "Training tips", icon: <FaBook />, category: "training", description: "Get advice on training and behavior" },
    { text: "Health advice", icon: <FaHeartbeat />, category: "health", description: "Learn about pet health and prevention" },
    { text: "Feeding guide", icon: <FaUtensils />, category: "food", description: "Nutrition information and schedules" },
    { text: "Grooming help", icon: <FaShower />, category: "grooming", description: "Grooming techniques and products" },
    { text: "Exercise ideas", icon: <FaRunning />, category: "play", description: "Activities and exercise recommendations" },
    { text: "Emergency care", icon: <RiFirstAidKitFill />, category: "emergency", description: "Urgent care information" },
    { text: "Dog specific", icon: <FaDog />, category: "dog", description: "Advice tailored for dogs" },
    { text: "Cat specific", icon: <FaCat />, category: "cat", description: "Advice tailored for cats" },
  ];

  // AI-enhanced response system
  const getResponse = (question, category = null) => {
    // Analyze sentiment to adapt response tone
    const sentiment = analyzeSentiment(question);
    setUserSentiment(sentiment);
    
    // Check for emergency situations
    const isEmergency = checkForEmergency(question);
    if (isEmergency) {
      setEmergencyDetected(true);
      return {
        text: "⚠️ This sounds like an emergency situation. Please contact your veterinarian or nearest emergency animal hospital IMMEDIATELY. Don't wait for online advice in critical situations.\n\nEmergency Animal Hospital Locator: https://www.aaha.org/your-pet/pet-owner-education/aaha-guidelines-for-pet-owners/pet-first-aid/\n\nWhile you seek professional help, keep your pet calm and follow basic first aid if you're trained to do so.",
        sentiment: "urgent",
        followups: [
          { text: "Find nearest vet", category: "emergency" },
          { text: "Basic first aid steps", category: "emergency" }
        ]
      };
    } else {
      setEmergencyDetected(false);
    }
    
    // Generate customized response based on pet profile if available
    let personalizedIntro = "";
    let personalizedAdvice = "";
    
    if (petProfile) {
      personalizedIntro = `For your ${petProfile.age}-year-old ${petProfile.breed} named ${petProfile.name}, `;
      
      // Add breed-specific advice
      if (petProfile.type === "dog") {
        if (petProfile.breed.toLowerCase().includes("retriever") || petProfile.breed.toLowerCase().includes("labrador")) {
          personalizedAdvice = "As retrievers are naturally energetic, they need plenty of exercise and mental stimulation. ";
        } else if (petProfile.breed.toLowerCase().includes("shepherd") || petProfile.breed.toLowerCase().includes("collie")) {
          personalizedAdvice = "As a herding breed, your dog thrives with tasks and activities that challenge their mind. ";
        }
      } else if (petProfile.type === "cat") {
        if (petProfile.breed.toLowerCase().includes("persian") || petProfile.breed.toLowerCase().includes("himalayan")) {
          personalizedAdvice = "Long-haired cats like yours need regular grooming to prevent matting. ";
        } else if (petProfile.breed.toLowerCase().includes("siamese") || petProfile.breed.toLowerCase().includes("oriental")) {
          personalizedAdvice = "Active breeds like yours benefit from interactive play several times daily. ";
        }
      }
      
      // Age-specific advice
      if (petProfile.age < 1) {
        personalizedAdvice += "For puppies/kittens under a year, proper socialization and early training are essential. ";
      } else if (petProfile.age > 8) {
        personalizedAdvice += "For senior pets, regular health checks and adjusted exercise routines are important. ";
      }
    }

    // If a category was provided, prioritize that category
    if (category) {
      switch(category) {
        case "training":
          let trainingResponse = `${personalizedIntro}consistency is key for pet training! Start with basic commands like 'sit' and 'stay' using positive reinforcement. Short, regular training sessions work better than long, infrequent ones. ${personalizedAdvice}`;
          generateAIInsight("training", question);
          return {
            text: trainingResponse,
            sentiment: sentiment,
            followups: [
              { text: "Basic commands guide", category: "training" },
              { text: "Behavioral issues", category: "training" },
              { text: "Puppy training tips", category: "training" }
            ]
          };
        case "health":
          let healthResponse = `${personalizedIntro}regular vet check-ups are important! Watch for changes in behavior, appetite, or energy levels as these may indicate health issues. Keep vaccinations up-to-date and maintain parasite prevention. ${personalizedAdvice}`;
          generateAIInsight("health", question);
          return {
            text: healthResponse,
            sentiment: sentiment,
            followups: [
              { text: "Vaccination schedule", category: "health" },
              { text: "Common health issues", category: "health" },
              { text: "View health trends", category: "data" }
            ]
          };
        case "food":
          let foodResponse = `${personalizedIntro}a balanced diet is essential for your pet's health. Ensure they have appropriate food for their age, size, and health needs. Always provide fresh water and consult your vet for specific dietary recommendations. ${personalizedAdvice}`;
          generateAIInsight("food", question);
          return {
            text: foodResponse,
            sentiment: sentiment,
            followups: [
              { text: "Feeding schedule", category: "food" },
              { text: "Healthy treats", category: "food" },
              { text: "Weight management", category: "food" }
            ]
          };
        case "grooming":
          let groomingResponse = `${personalizedIntro}regular grooming keeps your pet healthy and comfortable. Brushing helps reduce shedding and prevents matting. The bathing frequency depends on your pet's breed and lifestyle. ${personalizedAdvice}`;
          generateAIInsight("grooming", question);
          return {
            text: groomingResponse,
            sentiment: sentiment,
            followups: [
              { text: "Brushing techniques", category: "grooming" },
              { text: "Nail trimming tips", category: "grooming" },
              { text: "Bathing frequency", category: "grooming" }
            ]
          };
        case "play":
          let playResponse = `${personalizedIntro}daily exercise and play are crucial for your pet's physical and mental health. Different breeds have different exercise needs, but all pets benefit from regular activity and mental stimulation. ${personalizedAdvice}`;
          generateAIInsight("play", question);
          return {
            text: playResponse,
            sentiment: sentiment,
            followups: [
              { text: "Indoor activities", category: "play" },
              { text: "Mental stimulation", category: "play" },
              { text: "Track activity levels", category: "data" }
            ]
          };
        case "emergency":
          return {
            text: `If your pet is experiencing an emergency, please contact your veterinarian or emergency animal hospital immediately. For minor issues, keep a pet first aid kit handy with gauze, non-stick bandages, pet-safe antiseptic, and contact information for poison control. ${personalizedAdvice}`,
            sentiment: "serious",
            followups: [
              { text: "Pet first aid basics", category: "emergency" },
              { text: "Poison control", category: "emergency" },
              { text: "Emergency preparedness", category: "emergency" }
            ]
          };
        case "dog":
          let dogResponse = `${personalizedIntro}dogs are social animals that thrive on companionship and routine. Regular exercise, training, and mental stimulation are essential. ${personalizedAdvice}`;
          generateAIInsight("dog", question);
          return {
            text: dogResponse,
            sentiment: sentiment,
            followups: [
              { text: "Breed information", category: "dog" },
              { text: "Dog park etiquette", category: "dog" },
              { text: "Socialization tips", category: "dog" }
            ]
          };
        case "cat":
          let catResponse = `${personalizedIntro}cats are independent but still need attention and care. They benefit from scratching posts, climbing opportunities, and interactive play. ${personalizedAdvice}`;
          generateAIInsight("cat", question);
          return {
            text: catResponse,
            sentiment: sentiment,
            followups: [
              { text: "Enrichment ideas", category: "cat" },
              { text: "Litter box tips", category: "cat" },
              { text: "Managing scratching", category: "cat" }
            ]
          };
        case "data":
          setShowDataVisualization(true);
          return {
            text: "Here's the data visualization you requested. You can analyze trends and patterns to better understand your pet's health and activities.",
            sentiment: "neutral",
            followups: [
              { text: "Health trends", category: "data_health" },
              { text: "Activity levels", category: "data_activity" },
              { text: "Nutrition analysis", category: "data_nutrition" }
            ]
          };
        case "data_health":
          setShowDataVisualization(true);
          setSelectedVisualization('health');
          return {
            text: "Here's your pet's health data visualization. You can see weight trends and visit history.",
            sentiment: "neutral",
            followups: [
              { text: "Activity levels", category: "data_activity" },
              { text: "Nutrition analysis", category: "data_nutrition" },
              { text: "Close visualization", category: "close_data" }
            ]
          };
        case "data_activity":
          setShowDataVisualization(true);
          setSelectedVisualization('activity');
          return {
            text: "Here's your pet's activity data visualization. You can see exercise patterns and duration trends.",
            sentiment: "neutral",
            followups: [
              { text: "Health trends", category: "data_health" },
              { text: "Nutrition analysis", category: "data_nutrition" },
              { text: "Close visualization", category: "close_data" }
            ]
          };
        case "data_nutrition":
          setShowDataVisualization(true);
          setSelectedVisualization('nutrition');
          return {
            text: "Here's your pet's nutrition data visualization. You can analyze calorie intake and diet balance.",
            sentiment: "neutral",
            followups: [
              { text: "Health trends", category: "data_health" },
              { text: "Activity levels", category: "data_activity" },
              { text: "Close visualization", category: "close_data" }
            ]
          };
        case "close_data":
          setShowDataVisualization(false);
          return {
            text: "I've closed the data visualization. How else can I help with your pet care needs?",
            sentiment: "neutral",
            followups: quickReplies.slice(0, 4).map(reply => ({ text: reply.text, category: reply.category }))
          };
        case "setup_profile":
          setShowPetProfileSetup(true);
          return {
            text: "Great! Let's set up your pet's profile to provide more personalized advice. Please fill in the information in the form.",
            sentiment: "positive",
            followups: []
          };
        default:
          break;
      }
    }
    
    // Advanced contextual responses based on message content
    const lowercaseQuestion = question.toLowerCase();
    
    if (lowercaseQuestion.includes("training") || lowercaseQuestion.includes("train") || lowercaseQuestion.includes("behav")) {
      generateAIInsight("training", question);
      return {
        text: `${personalizedIntro}consistency is key for pet training! Start with basic commands like 'sit' and 'stay' using positive reinforcement. Short, regular training sessions work better than long, infrequent ones. ${personalizedAdvice}`,
        sentiment: sentiment,
        followups: [
          { text: "Basic commands guide", category: "training" },
          { text: "Behavioral issues", category: "training" },
          { text: "Puppy training tips", category: "training" }
        ]
      };
    } else if (lowercaseQuestion.includes("food") || lowercaseQuestion.includes("feeding") || lowercaseQuestion.includes("diet") || lowercaseQuestion.includes("eat")) {
      generateAIInsight("food", question);
      return {
        text: `${personalizedIntro}a balanced diet is essential for your pet's health. Ensure they have appropriate food for their age, size, and health needs. Always provide fresh water and consult your vet for specific dietary recommendations. ${personalizedAdvice}`,
        sentiment: sentiment,
        followups: [
          { text: "Feeding schedule", category: "food" },
          { text: "Healthy treats", category: "food" },
          { text: "Weight management", category: "food" }
        ]
      };
    } else if (lowercaseQuestion.includes("health") || lowercaseQuestion.includes("vet") || lowercaseQuestion.includes("sick") || lowercaseQuestion.includes("vaccine")) {
      generateAIInsight("health", question);
      return {
        text: `${personalizedIntro}regular vet check-ups are important! Watch for changes in behavior, appetite, or energy levels as these may indicate health issues. Keep vaccinations up-to-date and maintain parasite prevention. ${personalizedAdvice}`,
        sentiment: sentiment,
        followups: [
          { text: "Vaccination schedule", category: "health" },
          { text: "Common health issues", category: "health" },
          { text: "View health trends", category: "data_health" }
        ]
      };
    } else if (lowercaseQuestion.includes("groom") || lowercaseQuestion.includes("bath") || lowercaseQuestion.includes("brush") || lowercaseQuestion.includes("nail") || lowercaseQuestion.includes("clean")) {
      generateAIInsight("grooming", question);
      return {
        text: `${personalizedIntro}regular grooming keeps your pet healthy and comfortable. Brushing helps reduce shedding and prevents matting. The bathing frequency depends on your pet's breed and lifestyle. ${personalizedAdvice}`,
        sentiment: sentiment,
        followups: [
          { text: "Brushing techniques", category: "grooming" },
          { text: "Nail trimming tips", category: "grooming" },
          { text: "Bathing frequency", category: "grooming" }
        ]
      };
    } else if (lowercaseQuestion.includes("play") || lowercaseQuestion.includes("toy") || lowercaseQuestion.includes("exercise") || lowercaseQuestion.includes("walk") || lowercaseQuestion.includes("active")) {
      generateAIInsight("play", question);
      return {
        text: `${personalizedIntro}daily exercise and play are crucial for your pet's physical and mental health. Different breeds have different exercise needs, but all pets benefit from regular activity and mental stimulation. ${personalizedAdvice}`,
        sentiment: sentiment,
        followups: [
          { text: "Indoor activities", category: "play" },
          { text: "Mental stimulation", category: "play" },
          { text: "Track activity levels", category: "data_activity" }
        ]
      };
    } else if (lowercaseQuestion.includes("hi") || lowercaseQuestion.includes("hello") || lowercaseQuestion.includes("hey") || lowercaseQuestion.includes("start")) {
      // Check if pet profile exists for personalized greeting
      if (petProfile) {
        return {
          text: `Hello! How can I help you and ${petProfile.name} today? Feel free to ask about training, health, nutrition, or any other pet-related concerns!`,
          sentiment: "positive",
          followups: quickReplies.slice(0, 4).map(reply => ({ text: reply.text, category: reply.category }))
        };
      } else {
        return {
          text: "Hello! How can I help you with your pet today? To provide more personalized advice, would you like to set up your pet's profile?",
          sentiment: "positive",
          followups: [
            { text: "Set up pet profile", category: "setup_profile" },
            { text: "Ask general questions", category: "general" },
            { text: "Health advice", category: "health" },
            { text: "Training tips", category: "training" }
          ]
        };
      }
    } else if (lowercaseQuestion.includes("data") || lowercaseQuestion.includes("chart") || lowercaseQuestion.includes("track") || lowercaseQuestion.includes("trend") || lowercaseQuestion.includes("visual")) {
      setShowDataVisualization(true);
      return {
        text: "Here's the data visualization dashboard for your pet. You can track health metrics, activity levels, and nutrition information.",
        sentiment: "neutral",
        followups: [
          { text: "Health trends", category: "data_health" },
          { text: "Activity levels", category: "data_activity" },
          { text: "Nutrition analysis", category: "data_nutrition" },
          { text: "Close visualization", category: "close_data" }
        ]
      };
    } else if (lowercaseQuestion.includes("dog") || lowercaseQuestion.includes("puppy")) {
      generateAIInsight("dog", question);
      return {
        text: `${personalizedIntro}dogs are social animals that thrive on companionship and routine. Regular exercise, training, and mental stimulation are essential. ${personalizedAdvice}`,
        sentiment: sentiment,
        followups: [
          { text: "Breed information", category: "dog" },
          { text: "Dog park etiquette", category: "dog" },
          { text: "Socialization tips", category: "dog" }
        ]
      };
    } else if (lowercaseQuestion.includes("cat") || lowercaseQuestion.includes("kitten")) {
      generateAIInsight("cat", question);
      return {
        text: `${personalizedIntro}cats are independent but still need attention and care. They benefit from scratching posts, climbing opportunities, and interactive play. ${personalizedAdvice}`,
        sentiment: sentiment,
        followups: [
          { text: "Enrichment ideas", category: "cat" },
          { text: "Litter box tips", category: "cat" },
          { text: "Managing scratching", category: "cat" }
        ]
      };
    } else if (lowercaseQuestion.includes("profile") || lowercaseQuestion.includes("setup") || lowercaseQuestion.includes("information") || lowercaseQuestion.includes("my pet")) {
      setShowPetProfileSetup(true);
      return {
        text: "Let's set up or update your pet's profile to provide more personalized advice. Please fill in the information in the form.",
        sentiment: "positive",
        followups: []
      };
    } else {
      // General response for unrecognized queries
      return {
        text: `Thank you for your question! Our pet experts would be happy to help with this specific inquiry. ${personalizedIntro ? "Based on what we know about " + petProfile.name + ", " : ""}please provide more details about your pet and we'll give you the best advice possible.`,
        sentiment: "neutral",
        followups: quickReplies.slice(0, 4).map(reply => ({ text: reply.text, category: reply.category }))
      };
    }
  };

  // Sentiment analysis function
  const analyzeSentiment = (text) => {
    const lowercaseText = text.toLowerCase();
    
    // Check for urgent/emergency situations first
    for (let word of urgentWords) {
      if (lowercaseText.includes(word)) {
        return "urgent";
      }
    }
    
    // Count positive and negative words
    let positiveCount = 0;
    let negativeCount = 0;
    
    for (let word of positiveWords) {
      if (lowercaseText.includes(word)) {
        positiveCount++;
      }
    }
    
    for (let word of negativeWords) {
      if (lowercaseText.includes(word)) {
        negativeCount++;
      }
    }
    
    if (positiveCount > negativeCount) {
      return "positive";
    } else if (negativeCount > positiveCount) {
      return "negative";
    } else {
      return "neutral";
    }
  };

  // Check for emergency situations
  const checkForEmergency = (text) => {
    const lowercaseText = text.toLowerCase();
    
    // Urgent keywords that might indicate an emergency
    const emergencyPatterns = [
      /poison(ed|ing)?/,
      /chok(e|ing)/,
      /breath(ing)?\s*(problem|difficult|hard)/,
      /bleed(ing)?\s*(profusely|heavily|lot|stop)/,
      /hit by (car|vehicle)/,
      /fall(en)?\s*(from|off)/,
      /seiz(ed|ing|ure)/,
      /attack(ed)?/,
      /collapse(d)?/,
      /unconscious/,
      /(can't|cannot|won't)\s*(move|stand|walk)/,
      /broken\s*(leg|bone|paw)/
    ];
    
    // Check for emergency patterns
    for (let pattern of emergencyPatterns) {
      if (pattern.test(lowercaseText)) {
        return true;
      }
    }
    
    // Check for combinations of urgent words and symptoms
    let urgentWordFound = false;
    for (let word of urgentWords) {
      if (lowercaseText.includes(word)) {
        urgentWordFound = true;
        break;
      }
    }
    
    if (urgentWordFound) {
      const severeSymptoms = [
        'blood', 'vomit', 'breathing', 'collapsed', 'seizure', 
        'shaking', 'pale gums', 'bloated', 'stomach', 'hit', 
        'accident', 'car', 'fall', 'poison', 'ate', 'swallow',
        'chocolate', 'xylitol', 'grapes', 'raisin', 'toxic'
      ];
      
      for (let symptom of severeSymptoms) {
        if (lowercaseText.includes(symptom)) {
          return true;
        }
      }
    }
    
    return false;
  };

  // Generate AI insights based on user questions and context
  const generateAIInsight = (category, question) => {
    // Simulate AI analyzing the query and generating advanced insights
    const lowercaseQuestion = question.toLowerCase();
    let insight = {
      title: "",
      content: "",
      recommendation: "",
      source: "AI Analysis based on veterinary data"
    };
    
    switch(category) {
      case "training":
        insight.title = "Training Analysis";
        if (lowercaseQuestion.includes("puppy") || lowercaseQuestion.includes("young")) {
          insight.content = "Your question involves puppy training, which requires special consideration for developmental stages. Early socialization (3-14 weeks) is critical for puppies.";
          insight.recommendation = "Focus on positive reinforcement, keep sessions under 5 minutes, and prioritize socialization with various environments, people, and animals.";
        } else if (lowercaseQuestion.includes("aggressive") || lowercaseQuestion.includes("bark") || lowercaseQuestion.includes("bite")) {
          insight.content = "Behavioral issues like aggression or excessive barking often stem from anxiety, fear, or territorial instincts rather than disobedience.";
          insight.recommendation = "Consider consulting a certified animal behaviorist. Meanwhile, identify triggers and work on counter-conditioning techniques.";
        } else {
          insight.content = "Consistent training methods across all family members significantly improves success rates by 80%, according to animal behavior studies.";
          insight.recommendation = "Establish a regular training schedule with clear cues, immediate rewards, and consistent expectations from all household members.";
        }
        break;
      case "health":
        insight.title = "Health Insight";
        if (lowercaseQuestion.includes("senior") || lowercaseQuestion.includes("old")) {
          insight.content = "Senior pets require more frequent health monitoring. After age 7 (large breeds) or 9 (small breeds), semi-annual checkups are recommended.";
          insight.recommendation = "Watch for changes in mobility, appetite, water consumption, and bathroom habits as these are early indicators of common senior conditions.";
        } else if (lowercaseQuestion.includes("weight") || lowercaseQuestion.includes("obesity") || lowercaseQuestion.includes("fat")) {
          insight.content = "Pet obesity affects approximately 60% of cats and 56% of dogs in the US, increasing risk for diabetes, joint problems, and heart disease.";
          insight.recommendation = "Calculate proper portions based on ideal weight (not current), increase activity gradually, and eliminate or strictly limit table scraps.";
        } else {
          insight.content = "Preventative care like regular dental cleaning can extend a pet's life by 3-5 years by preventing systemic infections.";
          insight.recommendation = "Schedule annual wellness exams, keep vaccinations current, and establish a dental care routine including brushing and dental treats.";
        }
        break;
      case "food":
        insight.title = "Nutrition Analysis";
        if (lowercaseQuestion.includes("raw") || lowercaseQuestion.includes("diet")) {
          insight.content = "Raw diets remain controversial in veterinary medicine. While they can provide certain benefits, they also carry risks of bacterial contamination and nutritional imbalances.";
          insight.recommendation = "If pursuing a raw diet, consult with a veterinary nutritionist to ensure complete nutrition and follow strict food safety protocols.";
        } else if (lowercaseQuestion.includes("grain") || lowercaseQuestion.includes("allergy")) {
          insight.content = "True food allergies affect only about 10% of pets with skin issues. Protein sources (like chicken or beef) are more common allergens than grains.";
          insight.recommendation = "Consider an elimination diet under veterinary supervision rather than assuming grain sensitivity.";
        } else {
          insight.content = "Life-stage appropriate nutrition can prevent common health issues and extend lifespan. Protein and calorie needs change significantly throughout a pet's life.";
          insight.recommendation = "Select food formulated for your pet's specific age, size, and activity level, and transition between foods gradually over 7-10 days.";
        }
        break;
      case "grooming":
        insight.title = "Grooming Analysis";
        if (lowercaseQuestion.includes("shedding") || lowercaseQuestion.includes("fur") || lowercaseQuestion.includes("hair")) {
          insight.content = "Excessive shedding can indicate nutritional deficiencies, stress, or underlying health conditions beyond normal seasonal changes.";
          insight.recommendation = "Supplement with omega-3 fatty acids, ensure complete nutrition, and use deshedding tools during seasonal changes rather than cutting or shaving.";
        } else if (lowercaseQuestion.includes("nail") || lowercaseQuestion.includes("claw")) {
          insight.content = "Proper nail maintenance affects joint health and mobility. Overgrown nails can alter gait and cause long-term skeletal issues.";
          insight.recommendation = "Trim nails every 3-4 weeks, use positive reinforcement, and consider professional grooming if your pet resists handling.";
        } else {
          insight.content = "Regular grooming sessions provide opportunity to check for abnormal lumps, skin conditions, or parasites that might otherwise go unnoticed.";
          insight.recommendation = "Establish a weekly quick-check routine examining ears, teeth, skin, and paws even if full grooming isn't needed.";
        }
        break;
      case "play":
        insight.title = "Exercise Analysis";
        if (lowercaseQuestion.includes("bored") || lowercaseQuestion.includes("destructive")) {
          insight.content = "Destructive behaviors are often linked to insufficient mental stimulation rather than physical exercise alone.";
          insight.recommendation = "Implement puzzle feeders, rotating toys, and training games that engage problem-solving abilities alongside physical exercise.";
        } else if (lowercaseQuestion.includes("old") || lowercaseQuestion.includes("senior") || lowercaseQuestion.includes("arthritis")) {
          insight.content = "Senior pets benefit greatly from continued exercise, but needs change. Low-impact activities preserve muscle mass while protecting joints.";
          insight.recommendation = "Consider swimming, shorter more frequent walks, and gentle range-of-motion activities to maintain mobility and manage weight.";
        } else {
          insight.content = "Exercise requirements vary dramatically by breed and individual. Working breeds typically need 1-2 hours of activity daily, while some toy breeds may need only 30 minutes.";
          insight.recommendation = "Match activity type to breed purpose (scent work for hounds, retrieving for retrievers, etc.) for most effective mental and physical engagement.";
        }
        break;
      case "dog":
        insight.title = "Canine Insight";
        if (lowercaseQuestion.includes("bark")) {
          insight.content = "Barking serves multiple communication purposes including alerting, seeking attention, expressing anxiety, or responding to environmental triggers.";
          insight.recommendation = "Identify the specific cause of problematic barking before attempting to modify it, as treatment differs for anxiety-based vs. territorial barking.";
        } else if (lowercaseQuestion.includes("socialize") || lowercaseQuestion.includes("friendly")) {
          insight.content = "Dog socialization windows are critical during 3-14 weeks of age, but ongoing positive experiences throughout life maintain social skills.";
          insight.recommendation = "Focus on quality of interactions rather than quantity. One positive encounter is better than multiple stressful ones.";
        } else {
          insight.content = "Dogs have roughly 300 million olfactory receptors compared to humans' 6 million. Their primary way of experiencing the world is through scent.";
          insight.recommendation = "Incorporate scent-based activities like 'sniffari' walks (letting them explore with their nose) and scent games to improve mental well-being.";
        }
        break;
      case "cat":
        insight.title = "Feline Insight";
        if (lowercaseQuestion.includes("litter") || lowercaseQuestion.includes("box")) {
          insight.content = "Litter box avoidance is often medical before behavioral. UTIs, crystals, and digestive issues account for over 50% of sudden litter box problems.";
          insight.recommendation = "Rule out medical causes first, then ensure one more box than cats in household, placed in quiet low-traffic areas away from food.";
        } else if (lowercaseQuestion.includes("scratch") || lowercaseQuestion.includes("furniture")) {
          insight.content = "Scratching serves multiple purposes including scent marking, stretching, and claw maintenance. It's a natural, necessary behavior.";
          insight.recommendation = "Provide multiple scratching surfaces with different orientations (vertical and horizontal) and materials, positioned near resting areas and entry points.";
        } else {
          insight.content = "Cats are both predator and prey in natural settings, creating complex security needs. Elevated spaces and hiding spots are essential for wellbeing.";
          insight.recommendation = "Create a 'cat superhighway' with shelves or furniture that allows movement around rooms above ground level for security and exercise.";
        }
        break;
      default:
        insight = null;
        break;
    }
    
    setAiAnalysis(insight);
    setShowAIInsight(true);
  };

  const handleSend = () => {
    if (message.trim() === "") return;
    
    // Add user message to chat
    const userMessage = {
      id: Date.now(),
      text: message,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatMessages([...chatMessages, userMessage]);
    setMessage("");
    setIsLoading(true);
    setShowQuickReplies(false);
    
    // Simulate API delay
    setTimeout(() => {
      const response = getResponse(userMessage.text);
      const botMessage = {
        id: Date.now() + 1,
        text: response.text,
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sentiment: response.sentiment,
        followups: response.followups || []
      };
      
      setChatMessages(prevMessages => [...prevMessages, botMessage]);
      setIsLoading(false);
      setShowQuickReplies(true);
    }, 1000);
  };

  const handleQuickReply = (text, category) => {
    // Add user message to chat
    const userMessage = {
      id: Date.now(),
      text,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatMessages([...chatMessages, userMessage]);
    setIsLoading(true);
    setShowQuickReplies(false);
    
    // Simulate API delay
    setTimeout(() => {
      const response = getResponse(text, category);
      const botMessage = {
        id: Date.now() + 1,
        text: response.text,
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sentiment: response.sentiment,
        followups: response.followups || []
      };
      
      setChatMessages(prevMessages => [...prevMessages, botMessage]);
      setIsLoading(false);
      setShowQuickReplies(true);
    }, 1000);
  };

  // Handle keypress for sending messages
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Always scroll to bottom of message list when messages change
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  // Focus on input when chat opens
  useEffect(() => {
    if (showChat) {
      messageInputRef.current?.focus();
    }
  }, [showChat]);

  // Handle pet profile submission
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const profileData = {
      name: formData.get('petName'),
      type: formData.get('petType'),
      breed: formData.get('petBreed'),
      age: parseInt(formData.get('petAge')),
      weight: parseFloat(formData.get('petWeight')),
      healthIssues: formData.get('healthIssues')
    };
    
    setPetProfile(profileData);
    setShowPetProfileSetup(false);
    
    // Add confirmation message
    const botMessage = {
      id: Date.now(),
      text: `Thanks for setting up ${profileData.name}'s profile! I'll use this information to provide more personalized advice. How can I help you and ${profileData.name} today?`,
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sentiment: "positive",
      followups: quickReplies.slice(0, 4).map(reply => ({ text: reply.text, category: reply.category }))
    };
    
    setChatMessages(prevMessages => [...prevMessages, botMessage]);
  };

  // Handle clearing chat history
  const handleClearChat = () => {
    if (window.confirm("Are you sure you want to clear the chat history?")) {
      setChatMessages([]);
      localStorage.removeItem('chatMessages');
    }
  };

  // Handle message recording (voice input)
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // This would connect to Web Speech API in a real implementation
    if (!isRecording) {
      // Start recording
      setTimeout(() => {
        setMessage(message + "I'm looking for advice about my dog's diet");
        setIsRecording(false);
      }, 2000);
    }
  };

  return (
    <div className="chatbot-container">
      {!showChat && (
        <button 
          className="chat-button" 
          onClick={() => setShowChat(true)}
          aria-label="Open pet care chat"
        >
          <BsChatDotsFill className="chat-icon" />
          <span>Pet Care Assistant</span>
        </button>
      )}
      
      {showChat && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-title">
              <FaPaw />
              <h2>Pet Care Assistant</h2>
              {petProfile && <span className="pet-name">{petProfile.name}</span>}
            </div>
            <div className="chat-controls">
              <button 
                className="chat-control-button" 
                onClick={handleClearChat}
                aria-label="Clear chat history"
              >
                <BsTrash />
              </button>
              <button 
                className="chat-control-button" 
                onClick={() => setShowChat(false)}
                aria-label="Close chat"
              >
                <BsX />
              </button>
            </div>
          </div>
          
          <div className="chat-body" ref={chatBodyRef}>
            {chatMessages.length === 0 ? (
              <div className="welcome-screen">
                <div className="welcome-header">
                  <RiRobot2Line className="welcome-icon" />
                  <h3>Welcome to Pet Care Assistant!</h3>
                </div>
                <p>How can I help you care for your pet today?</p>
                <div className="category-grid">
                  {Object.entries(categories).map(([key, title]) => (
                    <div 
                      key={key} 
                      className="category-item"
                      onClick={() => handleQuickReply(`Tell me about ${title}`, key)}
                    >
                      {key === "training" && <FaBook className="category-icon" />}
                      {key === "health" && <FaHeartbeat className="category-icon" />}
                      {key === "food" && <FaUtensils className="category-icon" />}
                      {key === "grooming" && <FaShower className="category-icon" />}
                      {key === "play" && <FaRunning className="category-icon" />}
                      {key === "emergency" && <RiFirstAidKitFill className="category-icon" />}
                      {key === "dog" && <FaDog className="category-icon" />}
                      {key === "cat" && <FaCat className="category-icon" />}
                      <span>{title}</span>
                    </div>
                  ))}
                </div>
                {!petProfile && (
                  <button 
                    className="setup-profile-button"
                    onClick={() => setShowPetProfileSetup(true)}
                  >
                    <FaPaw /> Set Up Pet Profile
                  </button>
                )}
              </div>
            ) : (
              <div className="message-list">
                {chatMessages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`message ${msg.sender === "user" ? "user-message" : "bot-message"} ${msg.sentiment ? msg.sentiment : ""}`}
                  >
                    <div className="message-content">
                      {msg.sender === "bot" && (
                        <div className="bot-icon">
                          <RiRobot2Line />
                        </div>
                      )}
                      <div className="message-bubble">
                        <div className="message-text">{msg.text}</div>
                        <div className="message-time">{msg.timestamp}</div>
                      </div>
                    </div>
                    
                    {msg.sender === "bot" && msg.followups && msg.followups.length > 0 && showQuickReplies && (
                      <div className="quick-reply-container">
                        {msg.followups.map((reply, index) => (
                          <button
                            key={index}
                            className="quick-reply-btn"
                            onClick={() => handleQuickReply(reply.text, reply.category)}
                          >
                            {reply.text}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {isLoading && (
                  <div className="message bot-message">
                    <div className="message-content">
                      <div className="bot-icon">
                        <RiRobot2Line />
                      </div>
                      <div className="message-bubble">
                        <div className="typing-indicator">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messageEndRef} />
              </div>
            )}
            
            {/* Emergency Alert */}
            {emergencyDetected && (
              <div className="emergency-alert">
                <BsExclamationTriangle className="emergency-icon" />
                <div className="emergency-content">
                  <h4>Possible Emergency Detected</h4>
                  <p>This situation may require immediate veterinary attention.</p>
                  <a href="tel:1234567890" className="emergency-call-btn">
                    Call Emergency Vet
                  </a>
                </div>
              </div>
            )}
            
            {/* Data Visualization Component */}
            {showDataVisualization && (
              <div className="data-visualization">
                <div className="visualization-header">
                  <h3>
                    <FaChartLine />
                    {selectedVisualization === 'health' && 'Health Trends'}
                    {selectedVisualization === 'activity' && 'Activity Analysis'}
                    {selectedVisualization === 'nutrition' && 'Nutrition Tracking'}
                  </h3>
                  <button 
                    className="close-visualization"
                    onClick={() => setShowDataVisualization(false)}
                  >
                    <BsX />
                  </button>
                </div>
                
                <div className="visualization-tabs">
                  <button 
                    className={`viz-tab ${selectedVisualization === 'health' ? 'active' : ''}`}
                    onClick={() => setSelectedVisualization('health')}
                  >
                    <FaNotesMedical /> Health
                  </button>
                  <button 
                    className={`viz-tab ${selectedVisualization === 'activity' ? 'active' : ''}`}
                    onClick={() => setSelectedVisualization('activity')}
                  >
                    <FaRunning /> Activity
                  </button>
                  <button 
                    className={`viz-tab ${selectedVisualization === 'nutrition' ? 'active' : ''}`}
                    onClick={() => setSelectedVisualization('nutrition')}
                  >
                    <FaUtensils /> Nutrition
                  </button>
                </div>
                
                <div className="visualization-content">
                  {selectedVisualization === 'health' && (
                    <div className="health-charts">
                      <div className="chart weight-chart">
                        <h4><HiChartBar /> Weight Tracking (lbs)</h4>
                        <div className="chart-placeholder">
                          {/* Chart would be rendered here in a real implementation */}
                          <div className="bar-container">
                            {samplePetData.visits.map((visit, i) => (
                              <div key={i} className="chart-bar-container">
                                <div 
                                  className="chart-bar" 
                                  style={{height: `${visit.weight * 4}px`}}
                                  title={`${visit.weight} lbs`}
                                >
                                  <span className="bar-value">{visit.weight}</span>
                                </div>
                                <span className="bar-label">{visit.date.split('-')[1]}/{visit.date.split('-')[2]}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="recent-visits">
                        <h4><FaCalendarCheck /> Recent Vet Visits</h4>
                        <ul className="visit-list">
                          {samplePetData.visits.map((visit, i) => (
                            <li key={i} className="visit-item">
                              <div className="visit-date">{visit.date}</div>
                              <div className="visit-type">{visit.type}</div>
                              <div className="visit-notes">{visit.notes}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  
                  {selectedVisualization === 'activity' && (
                    <div className="activity-charts">
                      <div className="chart activity-chart">
                        <h4><FaRunning /> Activity Duration (minutes)</h4>
                        <div className="chart-placeholder">
                          <div className="bar-container">
                            {samplePetData.activities.map((activity, i) => (
                              <div key={i} className="chart-bar-container">
                                <div 
                                  className={`chart-bar activity-${activity.intensity}`}
                                  style={{height: `${activity.duration * 2}px`}}
                                  title={`${activity.duration} mins`}
                                >
                                  <span className="bar-value">{activity.duration}</span>
                                </div>
                                <span className="bar-label">{activity.type}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="activity-intensity">
                        <h4>Activity Breakdown</h4>
                        <div className="intensity-legend">
                          <div className="intensity-item">
                            <div className="intensity-color high"></div>
                            <span>High Intensity</span>
                          </div>
                          <div className="intensity-item">
                            <div className="intensity-color moderate"></div>
                            <span>Moderate</span>
                          </div>
                          <div className="intensity-item">
                            <div className="intensity-color low"></div>
                            <span>Low Intensity</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {selectedVisualization === 'nutrition' && (
                    <div className="nutrition-charts">
                      <div className="chart nutrition-chart">
                        <h4><FaUtensils /> Calorie Intake</h4>
                        <div className="chart-placeholder">
                          <div className="line-chart">
                            <div className="line-container">
                              {samplePetData.nutrition.map((day, i) => (
                                <div 
                                  key={i}
                                  className="line-point"
                                  style={{
                                    left: `${i * 25}%`,
                                    bottom: `${(day.calories - 800) / 100 * 20}%`
                                  }}
                                  title={`${day.calories} calories`}
                                ></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="nutrition-breakdown">
                        <h4>Daily Nutrition Log</h4>
                        <table className="nutrition-table">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Calories</th>
                              <th>Protein</th>
                              <th>Treats</th>
                            </tr>
                          </thead>
                          <tbody>
                            {samplePetData.nutrition.map((day, i) => (
                              <tr key={i}>
                                <td>{day.date.split('-')[1]}/{day.date.split('-')[2]}</td>
                                <td>{day.calories}</td>
                                <td>{day.protein}</td>
                                <td>{day.treats}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* AI Insight Component */}
            {showAIInsight && aiAnalysis && (
              <div className="ai-insight">
                <div className="insight-header">
                  <h3>
                    <RiMentalHealthLine /> {aiAnalysis.title}
                  </h3>
                  <button 
                    className="close-insight"
                    onClick={() => setShowAIInsight(false)}
                  >
                    <BsX />
                  </button>
                </div>
                <div className="insight-content">
                  <p>{aiAnalysis.content}</p>
                  <div className="insight-recommendation">
                    <BsCheckCircle className="recommendation-icon" />
                    <p>{aiAnalysis.recommendation}</p>
                  </div>
                  <div className="insight-source">
                    <FaUserMd className="source-icon" />
                    <span>{aiAnalysis.source}</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Pet Profile Setup Component */}
            {showPetProfileSetup && (
              <div className="pet-profile-setup">
                <div className="profile-header">
                  <h3>
                    <FaPaw /> {petProfile ? "Update Pet Profile" : "Set Up Pet Profile"}
                  </h3>
                  <button 
                    className="close-profile"
                    onClick={() => setShowPetProfileSetup(false)}
                  >
                    <BsX />
                  </button>
                </div>
                
                <form onSubmit={handleProfileSubmit} className="profile-form">
                  <div className="form-group">
                    <label htmlFor="petName">Pet Name</label>
                    <input 
                      type="text" 
                      id="petName" 
                      name="petName" 
                      required 
                      defaultValue={petProfile?.name || ""}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="petType">Pet Type</label>
                    <select 
                      id="petType" 
                      name="petType" 
                      required
                      defaultValue={petProfile?.type || ""}
                    >
                      <option value="" disabled>Select pet type</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="petBreed">Breed</label>
                    <input 
                      type="text" 
                      id="petBreed" 
                      name="petBreed" 
                      required 
                      defaultValue={petProfile?.breed || ""}
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group half">
                      <label htmlFor="petAge">Age (years)</label>
                      <input 
                        type="number" 
                        id="petAge" 
                        name="petAge" 
                        required 
                        min="0" 
                        step="0.1" 
                        defaultValue={petProfile?.age || ""}
                      />
                    </div>
                    
                    <div className="form-group half">
                      <label htmlFor="petWeight">Weight (lbs)</label>
                      <input 
                        type="number" 
                        id="petWeight" 
                        name="petWeight" 
                        required 
                        min="0" 
                        step="0.1"
                        defaultValue={petProfile?.weight || ""}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="healthIssues">Health Concerns (optional)</label>
                    <textarea 
                      id="healthIssues" 
                      name="healthIssues" 
                      rows="2"
                      defaultValue={petProfile?.healthIssues || ""}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-profile">
                    <FaBirthdayCake /> {petProfile ? "Update Profile" : "Create Profile"}
                  </button>
                </form>
              </div>
            )}
          </div>
          
          <div className="chat-footer">
            <div className="message-input-container">
              <textarea
                ref={messageInputRef}
                className="message-input"
                placeholder="Ask about pet care..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                rows={1}
              />
              
              <div className="input-buttons">
                <button 
                  className={`emoji-button ${showEmojiPicker ? 'active' : ''}`}
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  aria-label="Insert emoji"
                >
                  <BsEmojiSmile />
                </button>
                
                <button 
                  className="attachment-button"
                  aria-label="Attach image"
                >
                  <BsPaperclip />
                </button>
                
                <button 
                  className={`mic-button ${isRecording ? 'recording' : ''}`}
                  onClick={toggleRecording}
                  aria-label={isRecording ? "Stop recording" : "Start voice recording"}
                >
                  <BsMic />
                </button>
                
                <button 
                  className="send-button" 
                  onClick={handleSend}
                  disabled={message.trim() === ""}
                  aria-label="Send message"
                >
                  <BsSend />
                </button>
              </div>
              
              {showEmojiPicker && (
                <div className="emoji-picker">
                  <div className="emoji-grid">
                    {"😊 😃 😍 🐶 🐱 🐾 👍 ❤️ 🎾 🦴 🧶 🐭 👋 🥰 😂".split(" ").map((emoji, i) => (
                      <button 
                        key={i} 
                        className="emoji-item"
                        onClick={() => {
                          setMessage(message + emoji);
                          setShowEmojiPicker(false);
                          messageInputRef.current?.focus();
                        }}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;