

class PetSymptomModel {
  constructor() {
    this.symptoms = [
      "Acting Weird", "Diarrhea", "Itching", "Vomiting", "Vomiting and Diarrhea",
      "Aggression", "Bad Breath", "Bleeding", "Blood in Stool", "Blood in Urine",
      "Breathing Problems", "Coughing", "Crying", "Depression", "Ear Problems",
      "Eye Problems", "Fever", "Hair Loss", "Head Tilt", "Lethargic",
      "Limping", "Loss of Appetite", "Lumps", "Pain", "Panting",
      "Paralysis", "Reverse Sneezing", "Seizures", "Shaking", "Skin Problems",
      "Sneezing", "Stiffness", "Swelling", "Urination Changes", "Weight Loss",
      "Anal Gland Problems", "Bloating", "Constipation", "Drooling", "Excessive Thirst",
      "Flatulence", "Hiccups", "Mange", "Obesity", "Pale Gums",
      "Runny Nose", "Scooting", "Snoring", "Stomach Noises", "Yellow Eyes",
      "Excessive Licking", "Excessive Barking"
    ];
    
    this.firstAidInfo = {
      "Acting Weird": "Observe your pet closely for any other symptoms. Ensure they are safe and not in danger. Sudden behavior changes could indicate illness or pain. Contact your veterinarian for advice.",
      "Diarrhea": "Feed a bland diet (boiled chicken and rice). Ensure your pet has access to clean water. If diarrhea persists for more than 48 hours or contains blood, contact your veterinarian.",
      "Itching": "Check for fleas or ticks. Bathe with a gentle pet-friendly shampoo. Avoid known allergens. Contact your vet if itching persists or if skin appears red or inflamed.",
      "Vomiting": "Withhold food for 12–24 hours. Provide small amounts of water. If vomiting persists for more than 24 hours, contact your veterinarian.",
      "Vomiting and Diarrhea": "Withhold food for 12 hours, offer water frequently. Reintroduce a bland diet slowly. If symptoms persist beyond 24 hours or include blood, contact your veterinarian immediately.",
      "Aggression": "Keep your pet and others safe. Aggression may result from pain or fear. Avoid punishing your pet and consult a veterinarian or behaviorist.",
      "Bad Breath": "Brush your pet's teeth with pet-safe toothpaste. Offer dental chews. Persistent bad breath may indicate dental disease — schedule a vet check.",
      "Bleeding": "Apply gentle pressure using a clean cloth. Elevate the bleeding area if possible. If bleeding doesn't stop within 5 minutes, seek emergency vet care.",
      "Blood in Stool": "Monitor your pet. Withhold food for 12 hours but keep water available. Contact your vet immediately, especially if lethargy or vomiting is present.",
      "Blood in Urine": "Ensure your pet stays hydrated. Collect a urine sample if possible. Contact your veterinarian promptly to test for infection or other issues.",
      "Breathing Problems": "Keep your pet calm and still. Avoid stress or exertion. Seek immediate veterinary attention — breathing issues can be critical.",
      "Coughing": "Keep your pet in a warm, humid environment. Avoid excitement or exercise. If coughing persists over 24 hours or worsens, contact your vet.",
      "Crying": "Comfort your pet and observe for injuries. Crying may indicate pain or anxiety. If it continues or seems severe, consult your vet.",
      "Depression": "Spend time with your pet and encourage light play. If depression is accompanied by appetite loss or other symptoms, consult your vet.",
      "Ear Problems": "Avoid cleaning ears unless trained. Look for redness, discharge, or smell. Do not insert anything into the ear. Contact your vet for diagnosis.",
      "Eye Problems": "Flush with saline if debris is present. Avoid rubbing the eye. If redness, discharge, or squinting persists, seek veterinary care.",
      "Fever": "Check rectal temperature (normal is ~101–102.5°F / 38.3–39.2°C). Provide a cool area. Do not give human meds. Contact your vet immediately if above 103°F.",
      "Hair Loss": "Check for fleas, mites, or allergies. Keep skin clean and avoid scratching. Persistent or patchy hair loss should be evaluated by a vet.",
      "Head Tilt": "Can indicate ear infection or neurological issue. Limit movement and keep your pet calm. Seek veterinary evaluation urgently.",
      "Lethargic": "Ensure your pet has access to water and rest. Monitor closely. If your pet remains lethargic for more than 24 hours, contact your vet.",
      "Limping": "Rest your pet and avoid physical activity. Apply a cold compress if swelling is present. Contact your vet if limping persists more than 24 hours.",
      "Loss of Appetite": "Try offering a favorite bland food. Ensure water intake. If not eating for more than 24 hours, consult a veterinarian.",
      "Lumps": "Do not squeeze or poke the lump. Note the size, shape, and location. Monitor for changes and have your vet examine it.",
      "Pain": "Keep your pet calm and avoid handling the painful area. Do not give any human pain medications. Contact your vet immediately.",
      "Panting": "Ensure your pet is cool and calm. Excessive panting can indicate stress, heatstroke, or pain. Monitor and consult your vet if it persists.",
      "Paralysis": "Keep your pet still and calm. Support their body if moving. Seek emergency veterinary care immediately.",
      "Reverse Sneezing": "Gently massage your pet's throat or briefly cover their nose to encourage swallowing. If frequent, consult your vet.",
      "Seizures": "Stay calm. Move objects away to prevent injury. Time the seizure. Do not touch the mouth. Call your vet immediately afterward.",
      "Shaking": "Wrap your pet in a blanket to provide comfort. Shaking could be due to cold, fear, or illness. If it continues, call your vet.",
      "Skin Problems": "Check for parasites or irritants. Keep skin clean and prevent licking. Use hypoallergenic products. See vet if the issue continues.",
      "Sneezing": "Wipe away discharge. Use a humidifier in dry areas. Persistent or bloody sneezing warrants a vet visit.",
      "Stiffness": "Limit movement. Offer a comfortable, warm resting spot. Monitor for improvement. If stiffness remains, seek veterinary advice.",
      "Swelling": "Apply a cold compress for 10 minutes. Note size and location. Avoid pressure. If swelling grows or is painful, contact your vet.",
      "Urination Changes": "Monitor frequency and color. Ensure hydration. Collect a urine sample if needed. Sudden changes need vet evaluation.",
      "Weight Loss": "Monitor diet and behavior. Increase calorie intake with vet-approved foods. Sudden or ongoing weight loss needs veterinary investigation.",
      "Anal Gland Problems": "Scooting and licking are common signs. Avoid squeezing glands yourself. Have your vet express and inspect them.",
      "Bloating": "Can be life-threatening. Do not give food or water. Take your pet to the vet immediately — especially for large breeds.",
      "Constipation": "Encourage hydration. Add fiber (pumpkin) to food. Gentle exercise may help. If constipation continues beyond 48 hours, contact your vet.",
      "Drooling": "Check for objects stuck in the mouth. Remove access to any toxins. If drooling is excessive or sudden, see your vet.",
      "Excessive Thirst": "Ensure water availability. Increased thirst can signal underlying issues like diabetes or kidney disease. Schedule a vet check.",
      "Flatulence": "Feed smaller, more frequent meals. Avoid sudden food changes. If gas is excessive and paired with bloating, call your vet.",
      "Hiccups": "Usually harmless. Calm your pet and offer small sips of water. If frequent or lasting over a few hours, consult your vet.",
      "Mange": "Isolate infected pets. Do not touch bare skin areas. See a vet for medicated shampoos or treatments — mange is contagious.",
      "Obesity": "Adjust diet and reduce treats. Add light daily exercise. Consult your vet for a safe weight loss plan.",
      "Pale Gums": "Check for injury or internal bleeding. Keep your pet calm. Pale gums are a red flag — contact your vet immediately.",
      "Runny Nose": "Wipe discharge with a warm cloth. Monitor breathing and appetite. Persistent discharge or bleeding needs vet care.",
      "Scooting": "May indicate anal gland issues or parasites. Avoid home treatments. Have your vet examine and treat appropriately.",
      "Snoring": "Monitor for changes. Snoring may be normal in some breeds. If new or loud, check for nasal blockages or obesity.",
      "Stomach Noises": "Usually normal. Ensure hydration. If paired with vomiting or discomfort, withhold food and consult a vet.",
      "Yellow Eyes": "May indicate liver problems. Seek veterinary attention immediately. Do not wait for other symptoms to appear.",
      "Excessive Licking": "Distract your pet from licking. It may signal allergies, anxiety, or pain. Check the area being licked and call your vet.",
      "Excessive Barking": "Evaluate environment for triggers (boredom, fear). Provide mental stimulation and training. Rule out pain or illness."
    };

    
    this.possibleCauses = {
      "Vomiting": [
        "Dietary indiscretion (eating something they shouldn't)",
        "Parasites",
        "Viral infections",
        "Bacterial infections",
        "Pancreatitis",
        "Kidney disease",
        "Liver disease",
        "Foreign body ingestion"
      ],
      "Diarrhea": [
        "Dietary changes",
        "Food allergies or intolerance",
        "Parasites (giardia, roundworms, hookworms)",
        "Viral infections",
        "Bacterial infections",
        "Inflammatory bowel disease",
        "Stress or anxiety"
      ],
      // Add more causes for other symptoms
    };
    
    // Age-specific considerations for different symptoms
    this.ageSpecificConsiderations = {
      "Puppy (up to 2 years old)": {
        "general": "Young pets are more susceptible to infections as their immune systems are still developing. They're also prone to accidents and ingesting foreign objects due to their curious nature.",
        "Acting Weird": "Puppies may behave oddly due to new stimuli or environmental changes. Monitor closely for signs of illness or ingestion of toxic items.",
        "Aggression": "Puppy aggression can stem from fear, lack of socialization, or teething discomfort. Begin training early and consult a vet or behaviorist.",
        "Anal Gland Problems": "Uncommon in puppies, but scooting or licking the rear may indicate irritation or infection. Vet examination is recommended.",
        "Bad Breath": "Mild odor is normal during teething. Foul breath could indicate dental issues or digestive problems. Use age-appropriate dental chews.",
        "Bleeding": "Even minor bleeding can be serious in puppies. Clean wounds and consult your vet for any uncontrolled or unexplained bleeding.",
        "Bloating": "Puppy bloat is an emergency. If your puppy has a distended belly, drools, or retches without vomiting, seek urgent veterinary care.",
        "Blood in Stool": "This can result from parasites, diet change, or infection. Collect a stool sample and visit the vet immediately.",
        "Blood in Urine": "Can be due to urinary tract infection or congenital issues. Ensure the puppy stays hydrated and get a vet check-up.",
        "Breathing Problems": "Rapid or labored breathing can signal infection or airway blockage. Keep the puppy calm and seek emergency care.",
        "Constipation": "Often caused by diet or dehydration. Ensure fresh water and fiber-rich food. Persistent constipation needs veterinary care.",
        "Coughing": "Puppies are vulnerable to kennel cough and respiratory infections. Ensure vaccinations are up to date. Vet visit if persistent.",
        "Crying": "Mild whining is normal. Excessive crying could mean pain, hunger, or anxiety. Monitor for signs of illness.",
        "Depression": "If a playful puppy becomes withdrawn, it may be ill or stressed. Changes in environment or pain can also trigger depression.",
        "Diarrhea": "Can quickly lead to dehydration. Common causes include parasites or diet changes. Consult a vet if it lasts more than 12 hours.",
        "Drooling": "May occur during teething. Excessive drooling could indicate poisoning or dental issues. Watch for other symptoms.",
        "Ear Problems": "Frequent scratching, shaking, or head tilting may indicate infection or mites. Vet cleaning and medication may be needed.",
        "Excessive Barking": "Often due to boredom or lack of training. Rule out pain or anxiety and begin consistent training routines.",
        "Excessive Licking": "May be due to allergies, boredom, or skin irritation. Check paws and skin. Discourage the behavior and see a vet if it persists.",
        "Excessive Thirst": "Could be normal post-exercise or due to dry food. If persistent, rule out diabetes or kidney issues.",
        "Eye Problems": "Discharge, redness, or squinting may indicate infection or foreign bodies. Gently clean and visit the vet.",
        "Fever": "Young pets are more prone to infections. Watch for lethargy and loss of appetite. A vet visit is necessary if suspected.",
        "Flatulence": "Often caused by diet or rapid eating. Use slow feeders and monitor diet. Persistent gas could indicate digestive issues.",
        "Hair Loss": "Can be caused by mange, ringworm, or allergies. Check for bald spots or redness. Vet diagnosis is essential.",
        "Head Tilt": "May indicate an ear infection or neurological issue. Needs urgent veterinary attention.",
        "Hiccups": "Common and usually harmless in puppies. If frequent or paired with other symptoms, consult your vet.",
        "Itching": "Check for fleas or mites. Use gentle shampoos and age-safe parasite treatments. Persistent itching needs a vet visit.",
        "Lethargic": "Sudden fatigue in puppies can signal illness, infection, or low blood sugar. Seek veterinary attention quickly.",
        "Limping": "Can result from injury, rough play, or developmental conditions like hip dysplasia. Limit activity and see a vet.",
        "Loss of Appetite": "Short-term loss can be due to teething or stress. Prolonged refusal to eat should be checked by a vet.",
        "Lumps": "Even in puppies, lumps should be examined. They may be cysts, abscesses, or more serious conditions.",
        "Mange": "Caused by mites. Puppies have weaker immunity and are more prone. Requires vet-prescribed treatment.",
        "Obesity": "Early overfeeding can lead to long-term weight issues. Monitor portions and encourage activity.",
        "Pain": "Crying, hiding, or limping may signal pain. Avoid giving human medication and consult your vet.",
        "Pale Gums": "May indicate anemia, internal bleeding, or shock. Lift the lip to check. Immediate vet care required.",
        "Panting": "May be normal after play. Continuous panting at rest may signal overheating or pain.",
        "Paralysis": "This is a serious emergency. Could result from trauma, infection, or toxin exposure. Seek urgent vet care.",
        "Reverse Sneezing": "Common and usually harmless. If frequent or distressing, consult your vet.",
        "Runny Nose": "May be from allergies, infection, or a cold. Clear discharge is less concerning than yellow/green mucus.",
        "Scooting": "Can indicate anal gland issues or worms. Deworming and a vet check are recommended.",
        "Seizures": "Rare but can occur from toxins or congenital issues. Stay calm, keep puppy safe, and call the vet.",
        "Shaking": "Mild shaking may be cold or nervousness. Persistent shaking could mean pain or illness.",
        "Skin Problems": "Check for redness, rashes, or scabs. Could be due to parasites or allergies. Use vet-approved products.",
        "Sneezing": "Can be caused by dust or infection. Frequent sneezing with discharge needs a vet exam.",
        "Snoring": "Can be normal in some breeds. If it starts suddenly or worsens, check for nasal blockage or infection.",
        "Stiffness": "May follow rough play or signal injury. Rest and monitor. If stiffness persists, consult your vet.",
        "Stomach Noises": "Usually normal. Loud gurgles with vomiting/diarrhea may indicate upset stomach or parasites.",
        "Swelling": "Could be due to insect bites, allergic reaction, or trauma. Apply a cold compress and contact your vet.",
        "Urination Changes": "Frequent or reduced urination can signal UTI or other issues. Collect a sample and visit the vet.",
        "Vomiting": "May lead to dehydration quickly. If it occurs more than twice or contains blood, seek veterinary attention.",
        "Vomiting and Diarrhea": "Combined symptoms can indicate infection, food poisoning, or parasites. Hydration and urgent vet care needed.",
        "Weight Loss": "Concerning in growing puppies. May be due to parasites, poor nutrition, or illness. Vet diagnosis recommended.",
        "Yellow Eyes": "Can be a sign of liver disease or blood disorder. Requires immediate veterinary attention."
      },
     "Adult (2-7 years old)": {
    "general": "Adult pets typically have stronger immune systems but may develop chronic conditions that require ongoing management.",
    "Acting Weird": "May indicate stress, pain, or behavioral changes. Monitor for consistency and consult a vet if changes persist.",
    "Aggression": "Could stem from anxiety, medical conditions, or territorial behavior. A behaviorist or vet exam is recommended.",
    "Anal Gland Problems": "More common in adults. Signs include scooting and licking. Manual expression or treatment may be needed.",
    "Bad Breath": "Often due to dental disease or digestive issues. Dental cleanings and vet check-ups are advisable.",
    "Bleeding": "External bleeding from injury should be treated immediately. Internal bleeding signs (pale gums, lethargy) need emergency care.",
    "Bloating": "Gastric dilatation-volvulus (GDV) is a life-threatening emergency, especially in large breeds. Watch for restlessness and distended abdomen.",
    "Blood in Stool": "Could be due to parasites, infections, or dietary intolerance. Veterinary stool analysis is recommended.",
    "Blood in Urine": "Often indicates UTI or bladder stones. Require prompt urine testing and treatment.",
    "Breathing Problems": "Could signal allergies, heart disease, or infection. Labored breathing always warrants vet evaluation.",
    "Constipation": "Can result from low fiber diet, dehydration, or spinal issues. Ensure hydration and consider dietary adjustments.",
    "Coughing": "May suggest allergies, kennel cough, or heart disease. Persistent or productive coughs need vet attention.",
    "Crying": "Can indicate discomfort or anxiety. Monitor for additional signs like limping or abdominal sensitivity.",
    "Depression": "Behavioral changes may be caused by illness, boredom, or environmental stressors. Rule out medical issues first.",
    "Diarrhea": "Can stem from dietary indiscretion or infection. Monitor hydration and seek care if it persists beyond 24 hours.",
    "Drooling": "Could be from dental disease, nausea, or toxin exposure. Persistent drooling needs vet evaluation.",
    "Ear Problems": "Infections are common due to yeast or bacteria. Look for head shaking and discharge. Cleaning and meds required.",
    "Excessive Barking": "May result from boredom, anxiety, or learned behavior. Identify the cause and apply training or calming methods.",
    "Excessive Licking": "Often due to allergies, anxiety, or pain. Could lead to hotspots or infections if unchecked.",
    "Excessive Thirst": "May indicate early diabetes, kidney issues, or Cushing's disease. Blood tests may be necessary.",
    "Eye Problems": "Discharge, redness, or cloudiness may be signs of infection, ulcers, or glaucoma. Prompt vet visit is essential.",
    "Fever": "Often from infection or inflammation. Accompanied by lethargy or decreased appetite. Confirm with a vet thermometer.",
    "Flatulence": "May result from diet, allergies, or gut imbalance. Probiotics and a diet change may help.",
    "Hair Loss": "Commonly caused by allergies, hormonal issues, or parasites. Vet check for underlying cause is necessary.",
    "Head Tilt": "Often linked to inner ear infections or vestibular disease. Needs urgent veterinary attention.",
    "Hiccups": "Usually harmless. If frequent or paired with nausea or vomiting, consult a vet.",
    "Itching": "Adult pets commonly develop environmental or food allergies. Parasites can also cause persistent itching.",
    "Lethargic": "Could be from infection, metabolic disorders, or pain. A sudden drop in energy needs vet evaluation.",
    "Limping": "Often caused by injury, joint strain, or early arthritis. If not improving within 24–48 hours, consult a vet.",
    "Loss of Appetite": "May be due to dental issues, digestive problems, or systemic illness. Needs evaluation if lasting over 24 hours.",
    "Lumps": "Could be benign or cancerous. Any new or changing lump should be examined and possibly biopsied.",
    "Mange": "More likely from demodex or sarcoptic mites. Can spread quickly. Requires medical treatment and isolation if contagious.",
    "Obesity": "Common in adult pets due to decreased activity and overfeeding. Leads to many health issues. Monitor weight closely.",
    "Pain": "May show as reluctance to move, aggression, or whimpering. X-rays or bloodwork may be needed to find the source.",
    "Pale Gums": "Indicates anemia or blood loss. Could be life-threatening and requires immediate care.",
    "Panting": "Can be due to heat, pain, or anxiety. Persistent panting without exercise or heat requires a vet visit.",
    "Paralysis": "A medical emergency often caused by trauma or spinal issues. Immediate veterinary intervention needed.",
    "Reverse Sneezing": "Usually harmless and short-lived. If frequent, check for allergens or nasal irritants.",
    "Runny Nose": "May indicate upper respiratory infection or allergies. Monitor the discharge color and consult if it worsens.",
    "Scooting": "Often due to full anal glands or worms. Gland expression and deworming may be necessary.",
    "Seizures": "Could stem from epilepsy, toxins, or underlying illness. Requires diagnostic tests and monitoring.",
    "Shaking": "Can indicate anxiety, fever, or pain. Persistent shaking should be evaluated by a vet.",
    "Skin Problems": "Allergies, fungal infections, and bacterial skin issues are common. Look for redness, hair loss, or odor.",
    "Sneezing": "Occasional sneezing is normal. Frequent sneezing with discharge could be allergy or infection related.",
    "Snoring": "Can be normal, especially in brachycephalic breeds. New or worsening snoring may need evaluation for airway issues.",
    "Stiffness": "Could be early arthritis or overexertion. Anti-inflammatories or joint supplements may help.",
    "Stomach Noises": "Normal in small amounts. Loud gurgling with vomiting or diarrhea needs attention.",
    "Swelling": "May indicate infection, trauma, or allergic reaction. Sudden swelling is a vet emergency.",
    "Urination Changes": "Increased or decreased urination can suggest kidney or bladder issues. Urinalysis recommended.",
    "Vomiting": "Common causes include dietary issues, toxins, or systemic disease. Monitor frequency and contents.",
    "Vomiting and Diarrhea": "Combined can signal serious issues like pancreatitis or infection. Rehydration and vet care are critical.",
    "Weight Loss": "Can result from parasites, dental disease, or chronic illness. Blood tests and diagnostics may be required.",
    "Yellow Eyes": "A sign of jaundice, often from liver disease. Needs immediate veterinary evaluation."
  },
  "Senior (8+ years old)": {
    "general": "Senior pets are more prone to chronic conditions and may have multiple health issues simultaneously. Changes in behavior or symptoms should be taken seriously.",
    "Acting Weird": "Could be a sign of cognitive dysfunction syndrome (doggy dementia) or pain. Monitor for changes in behavior and consult a vet.",
    "Aggression": "Aggression in senior pets may be due to pain, fear, or cognitive dysfunction. Always rule out medical causes first.",
    "Anal Gland Problems": "Older pets are prone to anal gland issues. Scooting or licking frequently requires attention, and gland expression may be necessary.",
    "Bad Breath": "Often linked to dental disease, which is more common in seniors. Regular dental check-ups are crucial.",
    "Bleeding": "External bleeding from injury or internal bleeding could signal a more serious condition like cancer or clotting disorders. Seek immediate veterinary care.",
    "Bloating": "Gastric dilatation-volvulus (GDV) is a life-threatening emergency, especially in older, larger dogs. Watch for a distended abdomen and restlessness.",
    "Blood in Stool": "Could indicate gastrointestinal issues like ulcers, tumors, or inflammation. Immediate consultation with a vet is essential.",
    "Blood in Urine": "Often a sign of urinary tract infection (UTI), bladder stones, or cancer. Urine tests are needed for diagnosis.",
    "Breathing Problems": "Respiratory issues in seniors can signal heart disease, lung conditions, or infections. Immediate evaluation by a vet is important.",
    "Constipation": "Can be caused by dehydration, a decrease in activity, or dietary changes. Provide hydration and fiber, and seek vet advice if it persists.",
    "Coughing": "Coughing in senior pets may be due to heart disease, respiratory issues, or infections. A thorough check-up is recommended.",
    "Crying": "Could indicate discomfort, arthritis, or cognitive dysfunction. Observe other symptoms and consult a vet for pain management options.",
    "Depression": "Changes in behavior or mood can be linked to arthritis, cognitive dysfunction, or other health conditions in seniors.",
    "Diarrhea": "Persistent diarrhea in senior pets can indicate underlying infections, food intolerance, or more serious conditions like cancer.",
    "Drooling": "Excessive drooling may be caused by dental disease, oral cancer, or nausea. Consult a vet for diagnosis.",
    "Ear Problems": "Ear infections are common in senior pets due to immune system changes or chronic conditions. Check for redness or discharge.",
    "Excessive Barking": "Could be a sign of cognitive dysfunction syndrome or sensory loss. Training and behavior modification may be needed.",
    "Excessive Licking": "Could be due to anxiety, pain, or skin conditions. It may also be a sign of cognitive decline.",
    "Excessive Thirst": "Increased thirst in senior pets is often a sign of kidney disease, diabetes, or Cushing's disease. A vet check is necessary.",
    "Eye Problems": "Cloudy eyes or vision issues may be a sign of cataracts or glaucoma. Regular eye exams are essential for older pets.",
    "Fever": "Fever in senior pets is a serious symptom, often pointing to an infection or inflammation. Immediate vet care is needed.",
    "Flatulence": "More common in older pets due to changes in metabolism or digestive health. A vet may suggest a change in diet or probiotics.",
    "Hair Loss": "Could be caused by hormonal imbalances (e.g., hypothyroidism), parasites, or aging. A vet check is necessary for proper treatment.",
    "Head Tilt": "A head tilt in senior pets can be caused by vestibular disease, ear infections, or neurological issues. Seek veterinary advice.",
    "Hiccups": "Occasional hiccups are normal but frequent hiccups may signal gastrointestinal issues. Consult a vet if the condition persists.",
    "Itching": "Older pets may develop skin allergies, parasites, or systemic conditions like hypothyroidism. A vet will diagnose the underlying cause.",
    "Lethargic": "Lethargy in seniors often points to arthritis, heart disease, or organ failure. A vet exam is necessary to determine the cause.",
    "Limping": "Limping in older pets may be caused by arthritis, joint disease, or injury. Pain management and anti-inflammatory treatments are important.",
    "Loss of Appetite": "Loss of appetite can be a sign of dental disease, gastrointestinal issues, or systemic diseases like cancer. A vet check is essential.",
    "Lumps": "Lumps are more common in senior pets and could be benign or malignant. A vet will perform a biopsy or diagnostic tests to determine the cause.",
    "Mange": "Mange in senior pets can be more difficult to treat. It may indicate an underlying immune system issue or poor health.",
    "Obesity": "Weight gain in older pets is common due to reduced activity levels. Weight management is crucial to prevent further health complications.",
    "Pain": "Pain may manifest as reluctance to move, whining, or aggression. Joint disease and arthritis are common in senior pets.",
    "Pale Gums": "Pale gums can indicate anemia, blood loss, or systemic disease. Immediate vet care is necessary to determine the cause.",
    "Panting": "Excessive panting in seniors may indicate pain, heart disease, or respiratory issues. A vet visit is essential for a proper diagnosis.",
    "Paralysis": "Paralysis in senior pets can be due to spinal issues, stroke, or other neurological conditions. Emergency vet care is needed.",
    "Reverse Sneezing": "Reverse sneezing in older pets is often harmless, but it may indicate nasal irritation or allergies. Consult a vet if it becomes frequent.",
    "Runny Nose": "A runny nose in senior pets can indicate a respiratory infection, allergies, or nasal tumors. A vet exam is recommended for diagnosis.",
    "Scooting": "Scooting often points to anal gland issues or worms. Older pets may require more frequent anal gland expression.",
    "Seizures": "Seizures in senior pets are more likely to be caused by brain tumors, epilepsy, or metabolic diseases. Immediate vet care is essential.",
    "Shaking": "Shaking or trembling in senior pets can be due to pain, anxiety, or neurological conditions. It should not be ignored.",
    "Skin Problems": "Senior pets are more prone to skin infections, tumors, and dry skin. Regular skin check-ups are important.",
    "Sneezing": "Frequent sneezing may indicate nasal issues, infections, or tumors. A vet examination is necessary for diagnosis.",
    "Snoring": "Older pets may snore more due to changes in their airway structure. If snoring is paired with labored breathing, seek veterinary advice.",
    "Stiffness": "Stiffness is a common sign of arthritis and joint pain in senior pets. Joint supplements or pain relief medications may help.",
    "Stomach Noises": "Loud or frequent stomach noises could indicate gastrointestinal issues, such as bloating or constipation. A vet evaluation is recommended.",
    "Swelling": "Swelling may indicate fluid retention, tumors, or infections. A vet must examine any sudden or unexplained swelling.",
    "Urination Changes": "Frequent urination or difficulty urinating can signal kidney disease, diabetes, or bladder problems in senior pets.",
    "Vomiting": "Vomiting in older pets may be related to kidney disease, liver issues, or cancer. It should be addressed by a vet.",
    "Vomiting and Diarrhea": "When vomiting and diarrhea occur together in seniors, it may indicate a serious infection or metabolic disorder. Immediate vet care is necessary.",
    "Weight Loss": "Unexplained weight loss can be a sign of cancer, kidney disease, or digestive problems. A vet exam and tests are needed.",
    "Yellow Eyes": "Yellowing of the eyes (jaundice) is often associated with liver or blood disorders and requires prompt veterinary attention."
  }
    };

    

    this.neuterSpayConsiderations = {
      "Male": {
        "spayed": { // Neutered
          "general": "Neutered male pets generally have a reduced risk of reproductive-related issues and certain behaviors compared to intact males.",
          "Aggression": "While neutering can reduce some aggression issues, it's not a cure-all for behavioral problems. Training and proper socialization are still important factors.",
          "Urination Changes": "Neutered males are less likely to mark territory, but urination changes could indicate urinary tract infections or other health issues.",
          "Excessive Barking": "Neutering can reduce some hormone-driven behaviors, but barking may be related to anxiety, boredom, or other causes that need to be addressed.",
          "Acting Weird": "Sudden behavior changes in neutered pets are less likely to be hormone-related and may indicate pain, anxiety, or health issues that should be evaluated."
        },
        "intact": { // Not neutered
          "general": "Intact male pets may exhibit hormone-driven behaviors and are at risk for certain reproductive-related health issues.",
          "Aggression": "Hormone-influenced aggression can be more common in intact males. This may be directed at other male animals or occur in the presence of females in heat.",
          "Urination Changes": "Marking behavior is common in intact males. However, changes in urination patterns may also indicate urinary or prostate issues.",
          "Excessive Barking": "Intact males may be more vocal and reactive, especially in response to females in heat or when competing with other males.",
          "Swelling": "In intact males, swelling in the testicular area can indicate serious conditions like testicular torsion or cancer and requires immediate veterinary attention.",
          "Lumps": "Intact males are at higher risk for testicular tumors. Any lumps in the genital area should be evaluated promptly by a veterinarian.",
          "Pain": "Intact males are more susceptible to prostate issues, which can cause pain or discomfort, especially in older dogs."
        }
      },
      "Female": {
        "spayed": { // Spayed
          "general": "Spayed female pets have significantly reduced risks of reproductive cancers and infections.",
          "Bloating": "While spayed females have a slightly higher risk of urinary incontinence, persistent bloating could indicate other gastrointestinal issues.",
          "Urination Changes": "Urinary incontinence can occasionally develop in spayed females due to reduced estrogen. This is treatable and should be evaluated by your vet.",
          "Weight Gain": "Spaying can slightly decrease metabolic rate. Monitor food intake and ensure regular exercise to maintain a healthy weight.",
          "Bleeding": "Any bleeding in a spayed female is abnormal and should be evaluated by a veterinarian, as it's not related to reproductive cycles."
        },
        "intact": { // Not spayed
          "general": "Intact female pets are at risk for several reproductive-related conditions including pyometra (uterine infection), mammary tumors, and complications from pregnancy.",
          "Bleeding": "In intact females, unexpected bleeding could be related to estrus cycles but can also indicate serious conditions like pyometra. Consult your veterinarian.",
          "Swelling": "Swelling in the mammary or genital areas of intact females can indicate infections, tumors, or pregnancy-related issues requiring veterinary attention.",
          "Aggression": "Hormonal fluctuations during heat cycles can cause behavioral changes including aggression or irritability in some intact females.",
          "Excessive Licking": "Excessive licking of the genital area in intact females might indicate heat cycles, infections, or other reproductive issues.",
          "Lethargy": "In intact females, lethargy combined with other symptoms could indicate pyometra, a life-threatening uterine infection requiring immediate veterinary care.",
          "Excessive Thirst": "Excessive drinking in intact females, especially after a heat cycle, could indicate developing pyometra and requires prompt veterinary attention."
        }
      }
    };
  }

  // Get all available symptoms
  getAllSymptoms() {
    return this.symptoms;
  }

  // Get first aid information for a specific symptom
  getFirstAidInfo(symptom) {
    return this.firstAidInfo[symptom] || "No specific first aid available. Please contact your veterinarian.";
  }

  // Get possible causes for a specific symptom
  getPossibleCauses(symptom) {
    return this.possibleCauses[symptom] || ["Unknown causes. Please consult with your veterinarian."];
  }

  // Get recommendation based on pet info and symptom
  getRecommendation(petInfo) {
    const { petType, mainSymptom, age, sex, isSpayed } = petInfo;
    
    // Basic recommendation template
    let recommendation = `Based on the information provided about your ${petType.toLowerCase()}`;
    
    if (petInfo.petName) {
      recommendation += ` ${petInfo.petName}`;
    }
    
    recommendation += `, showing symptoms of ${mainSymptom}, we recommend the following:\n\n`;
    
    // Add first aid info
    recommendation += `First Aid: ${this.getFirstAidInfo(mainSymptom)}\n\n`;
    
    // Add age-specific advice
    recommendation += "Age-Specific Considerations:\n";
    
    // General age advice
    if (this.ageSpecificConsiderations[age] && this.ageSpecificConsiderations[age]["general"]) {
      recommendation += this.ageSpecificConsiderations[age]["general"] + "\n\n";
    }
    
    // Symptom-specific age advice
    if (this.ageSpecificConsiderations[age] && this.ageSpecificConsiderations[age][mainSymptom]) {
      recommendation += this.ageSpecificConsiderations[age][mainSymptom] + "\n\n";
    }
    
    // Add adult-specific advice if missing
    if (age === "Adult (2-7 years old)" && !this.ageSpecificConsiderations[age]) {
      this.ageSpecificConsiderations[age] = {
        "general": "Adult pets are in their prime years and should maintain regular exercise and preventive care.",
        [mainSymptom]: `For adult pets, ${mainSymptom} may indicate developing health issues that should be monitored closely. Regular veterinary check-ups are important to catch any potential problems early.`
      };
    }
    
    // NEW: Add neuter/spay specific considerations
    const neuterStatus = isSpayed ? "spayed" : "intact";
    recommendation += `${sex}-Specific Considerations (${neuterStatus}):\n`;
    
    // General neuter/spay advice
    if (this.neuterSpayConsiderations[sex] && 
        this.neuterSpayConsiderations[sex][neuterStatus] && 
        this.neuterSpayConsiderations[sex][neuterStatus]["general"]) {
      recommendation += this.neuterSpayConsiderations[sex][neuterStatus]["general"] + "\n\n";
    }
    
    // Symptom-specific neuter/spay advice
    if (this.neuterSpayConsiderations[sex] && 
        this.neuterSpayConsiderations[sex][neuterStatus] && 
        this.neuterSpayConsiderations[sex][neuterStatus][mainSymptom]) {
      recommendation += this.neuterSpayConsiderations[sex][neuterStatus][mainSymptom] + "\n\n";
    }
    
    // Recommendations for intact pets
    if (!isSpayed) {
      if (sex === "Female") {
        recommendation += "Additional Female Intact Considerations:\n";
        if (age === "Adult (2-7 years old)") {
          recommendation += "In intact female adult pets, symptoms can be related to reproductive cycles or conditions. Consider discussing spaying with your veterinarian to prevent reproductive health issues.\n\n";
        } else if (age === "Senior (8+ years old)") {
          recommendation += "In intact female senior pets, reproductive organ issues become more common with age. Consider consulting with your veterinarian about spaying to prevent conditions like pyometra (uterine infection) which can be life-threatening.\n\n";
        }
      } else if (sex === "Male") {
        recommendation += "Additional Male Intact Considerations:\n";
        if (age === "Adult (2-7 years old)" || age === "Senior (8+ years old)") {
          recommendation += "In intact male pets, certain behaviors and health issues can be related to hormonal influences. Consider discussing neutering with your veterinarian to prevent conditions like prostate issues and certain types of aggression.\n\n";
        }
      }
    }
    
    // Add urgency level
    const urgentSymptoms = ["Breathing Problems", "Blood in Stool", "Blood in Urine", "Seizures", "Paralysis", "Pale Gums"];
    
    // Additional urgent symptoms based on sex and neuter status
    if (sex === "Female" && !isSpayed && 
        (mainSymptom === "Lethargy" || mainSymptom === "Swelling" || 
         mainSymptom === "Fever" || mainSymptom === "Excessive Thirst")) {
      urgentSymptoms.push(mainSymptom); // Add these as urgent for intact females
    }
    
    if (sex === "Male" && !isSpayed && 
        (mainSymptom === "Pain" || mainSymptom === "Swelling" && age === "Senior (8+ years old)")) {
      urgentSymptoms.push(mainSymptom); // Add these as urgent for intact senior males
    }
    
    // Add age-specific urgency adjustments
    let urgencyMessage = "";
    if (urgentSymptoms.includes(mainSymptom)) {
      urgencyMessage = "⚠️ URGENT: This symptom may indicate a serious condition. Please seek veterinary care immediately.";
    } else {
      // Different follow-up timelines based on age
      if (age === "Puppy (up to 2 years old)") {
        urgencyMessage = "If symptoms persist for more than 12-24 hours or worsen, please consult with your veterinarian as young pets can deteriorate quickly.";
      } else if (age === "Senior (8+ years old)") {
        urgencyMessage = "If symptoms persist for more than 24 hours or worsen, please consult with your veterinarian as senior pets may have less reserve capacity to handle illness.";
      } else {
        urgencyMessage = "If symptoms persist for more than 24-48 hours or worsen, please consult with your veterinarian.";
      }
    }
    
    recommendation += urgencyMessage + "\n\n";
    
    // Add preventive advice based on symptom, age, and neuter/spay status
    recommendation += "Preventive Measures:\n";

    if (mainSymptom === "Vomiting" || mainSymptom === "Diarrhea") {
      recommendation += "• Maintain a consistent diet and avoid sudden food changes\n";
      recommendation += "• Keep potentially harmful foods, plants, and objects out of reach\n";
      recommendation += "• Ensure clean, fresh water is always available to prevent dehydration\n";
       if (age === "Puppy (up to 2 years old)") {
        recommendation += "• Ensure proper vaccination to prevent infectious causes like parvovirus\n";
        recommendation += "• Follow a strict deworming schedule as advised by your vet\n";
        recommendation += "• Use puppy-safe food and treats\n";
      } else if (age === "Adult (2 to 8 years old)") {
        recommendation += "• Monitor for food intolerances or allergies\n";
        recommendation += "• Avoid feeding table scraps or fatty foods\n";
        recommendation += "• Consult your vet about switching to a sensitive stomach formula if recurrent\n";
      } else if (age === "Senior (8+ years old)") {
        recommendation += "• Monitor for signs of dehydration or electrolyte imbalance\n";
        recommendation += "• Consider underlying health issues like kidney or liver disease\n";
        recommendation += "• Discuss senior-specific diets with your vet\n";
      }
    }
    

    else if (mainSymptom === "Itching" || mainSymptom === "Skin Problems") {
      recommendation += "• Regular flea and tick prevention\n";
      recommendation += "• Regular grooming and routine skin checks\n";
      recommendation += "• Use gentle, pet-safe shampoos and avoid overbathing\n";
       if (age === "Puppy (up to 2 years old)") {
        recommendation += "• Monitor for signs of mange or allergies as puppies are more sensitive\n";
        recommendation += "• Use puppy-formulated grooming products\n";
      } else if (age === "Adult (2 to 8 years old)") {
        recommendation += "• Consider environmental or food allergies if issues persist\n";
        recommendation += "• Consult your vet for a hypoallergenic diet if needed\n";
      } else if (age === "Senior (8+ years old)") {
        recommendation += "• Skin may become drier with age — consider moisturizing sprays or omega-3 supplements\n";
        recommendation += "• Regular vet checkups to rule out hormonal imbalances or tumors\n";
      }
    }
    

    else if (mainSymptom === "Limping") {
      recommendation += "• Maintain appropriate exercise levels and avoid intense physical activity until evaluated\n";
      recommendation += "• Avoid slippery floors and jumping from heights to prevent further strain\n";
    
      if (age === "Puppy (up to 2 years old)") {
        recommendation += "• Ensure proper nutrition for developing bones and joints\n";
        recommendation += "• Monitor for congenital issues or injuries from play\n";
      } else if (age === "Adult (2 to 8 years old)") {
        recommendation += "• Consider soft tissue injuries, sprains, or strains from activity\n";
        recommendation += "• Consult your vet if limping persists beyond a day or worsens\n";
      } else if (age === "Senior (8+ years old)") {
        recommendation += "• Consider joint supplements after discussing with your veterinarian\n";
        recommendation += "• Maintain a healthy weight to reduce joint stress\n";
        recommendation += "• Watch for signs of arthritis or chronic joint conditions\n";
      }
    }
    

    else if (mainSymptom === "Aggression") {
      recommendation += "• Ensure proper socialization and obedience training\n";
      recommendation += "• Identify and address behavioral triggers (e.g., fear, territory, pain)\n";
      recommendation += "• Avoid punishment-based training; use positive reinforcement\n";
    
      if (age === "Puppy (up to 2 years old)") {
        recommendation += "• Begin early behavior training and socialize with other pets and people\n";
        recommendation += "• Avoid rough play that may reinforce aggressive behavior\n";
      } else if (age === "Adult (2 to 8 years old)") {
        recommendation += "• Consider a behavioral assessment with a professional trainer if aggression escalates\n";
        recommendation += "• Evaluate the environment for stressors (e.g., new pets, moving homes)\n";
      } else if (age === "Senior (8+ years old)") {
        recommendation += "• Monitor for pain or cognitive decline, which may cause irritability\n";
        recommendation += "• Schedule a full health check-up to rule out age-related conditions like arthritis\n";
      }
    }
    

    else if (mainSymptom === "Urination Changes") {
      recommendation += "• Ensure access to clean, fresh water at all times\n";
      recommendation += "• Monitor frequency, color, and odor of urine for abnormalities\n";
      recommendation += "• Avoid encouraging your pet to hold urine for extended periods\n";
    
      if (age === "Puppy (up to 2 years old)") {
        recommendation += "• Provide frequent potty breaks during house training\n";
        recommendation += "• Watch for signs of urinary tract infections (UTIs), which are common in young pups\n";
      } else if (age === "Adult (2 to 8 years old)") {
        recommendation += "• Watch for signs of behavioral marking or urinary infections\n";
        recommendation += "• Consult a vet if sudden urination changes occur, as it could indicate early organ issues\n";
      } else if (age === "Senior (8+ years old)") {
        recommendation += "• Schedule regular check-ups for kidney and bladder health\n";
        recommendation += "• Look for signs of incontinence or increased thirst (possible signs of diabetes or kidney disease)\n";
      }
    }
    

// Excessive Barking
else if (mainSymptom === "Excessive Barking") {
  recommendation += "• Provide adequate mental and physical stimulation\n";
  recommendation += "• Identify and address boredom, anxiety, or external triggers (e.g., other animals, noises)\n";

  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Start consistent training and early socialization to prevent learned barking behaviors\n";
    recommendation += "• Use positive reinforcement to shape appropriate communication\n";
  } else if (age === "Adult (2 to 8 years old)") {
    recommendation += "• Reassess daily routine to ensure physical activity and engagement\n";
    recommendation += "• Consider behavioral training or enrichment toys to reduce stress and boredom\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Rule out hearing loss or cognitive decline as potential causes of increased vocalization\n";
    recommendation += "• Maintain a calm environment and minimize changes in surroundings\n";
  }
}


// Swelling or Lumps
else if (mainSymptom === "Swelling" || mainSymptom === "Lumps") {
  recommendation += "• Schedule veterinary exams to monitor any growths or changes in size, shape, or texture\n";
  recommendation += "• Avoid pressing or manipulating any swelling or lump at home\n";

  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Monitor for congenital lumps or post-vaccination swellings\n";
    recommendation += "• Ensure proper nutrition for immune support during development\n";
  } else if (age === "Adult (2 to 8 years old)") {
    recommendation += "• Watch for any trauma-related swelling or infection and consult your vet if it persists\n";
    recommendation += "• Regularly check during grooming for early detection\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Frequent vet checkups are important to detect tumors or cysts early\n";
    recommendation += "• Consider diagnostic tests (biopsy, ultrasound) for any unusual or fast-growing lumps\n";
  }
}


// Pain or Discomfort
else if (mainSymptom === "Pain" || mainSymptom === "Discomfort") {
  recommendation += "• Monitor for signs like limping, whining, excessive licking, or changes in behavior\n";
  recommendation += "• Avoid giving human medications unless prescribed by a veterinarian\n";

  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Ensure safe play areas to reduce the risk of injury from overactivity\n";
    recommendation += "• Monitor growth-related discomfort or teething pain\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Evaluate activity routines or intense play that may contribute to joint or muscle strain\n";
    recommendation += "• If persistent, schedule a veterinary evaluation to rule out underlying causes\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Discuss chronic pain management with your vet, including joint supplements or medications\n";
    recommendation += "• Provide comfortable bedding and ramps to reduce physical strain\n";
  }
}

// Bleeding
else if (mainSymptom === "Bleeding") {
  recommendation += "• Apply gentle pressure to the area with a clean cloth to stop bleeding\n";
  recommendation += "• Seek immediate veterinary care if bleeding is severe or does not stop within a few minutes\n";

  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Puppy-proof your environment to prevent injuries from sharp objects or chewing hazards\n";
    recommendation += "• Monitor for signs of bleeding due to teething or minor injuries during play\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Watch for bleeding related to rough activity, injuries, or oral health issues\n";
    recommendation += "• Schedule a vet visit if bleeding recurs or seems unexplained\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Be alert for spontaneous or frequent bleeding which could indicate underlying conditions (e.g., tumors, clotting disorders)\n";
    recommendation += "• Discuss with your veterinarian about blood work or further diagnostics if bleeding is recurring\n";
  }
}


// Excessive Thirst
else if (mainSymptom === "Excessive Thirst") {
  recommendation += "• Ensure constant access to fresh, clean water at all times\n";
  recommendation += "• Monitor your pet's water intake closely and watch for any sudden changes\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Ensure your puppy stays well-hydrated during play and after exercise\n";
    recommendation += "• Avoid long periods in hot weather to prevent dehydration\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Maintain a balanced diet that supports hydration\n";
    recommendation += "• Monitor water intake, and consult with your veterinarian if you notice drastic changes\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Excessive thirst in senior pets can indicate kidney or diabetes issues, so a veterinary check is advised\n";
    recommendation += "• Keep a close watch for signs of dehydration or urinary issues\n";
  }
}


// Lethargy
else if (mainSymptom === "Lethargy") {
  recommendation += "• Ensure a quiet and comfortable environment for rest\n";
  recommendation += "• Monitor for signs of underlying infections, illnesses, or health issues\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Ensure your puppy has adequate rest between play and exercise sessions\n";
    recommendation += "• Monitor for excessive lethargy as it may indicate illness or overexertion\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a balanced diet to maintain energy levels\n";
    recommendation += "• If lethargy persists, consult with your veterinarian for a health evaluation\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Regular health check-ups are essential to identify age-related health issues early\n";
    recommendation += "• Ensure a comfortable resting area and avoid stressors that could worsen lethargy\n";
  }
}


// Coughing
else if (mainSymptom === "Coughing") {
  recommendation += "• Avoid exposure to irritants such as smoke, dust, or strong scents, which can worsen coughing\n";
  recommendation += "• Keep your pet calm and prevent excessive physical activity\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Puppies may cough due to kennel cough or other infections, so keep them isolated if needed\n";
    recommendation += "• Ensure vaccinations are up-to-date to prevent infections\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Ensure a balanced diet and proper hydration to support respiratory health\n";
    recommendation += "• Consult with your veterinarian if coughing persists or worsens\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Coughing in senior pets may indicate heart or lung issues, such as heartworm or bronchitis\n";
    recommendation += "• Schedule a veterinary check-up to rule out any serious conditions like pneumonia or heart disease\n";
  }
}


// Loss of Appetite
else if (mainSymptom === "Loss of Appetite") {
  recommendation += "• Check for any signs of pain or discomfort, as pets may refuse to eat when in pain\n";
  recommendation += "• Ensure your pet has access to fresh water and provide small, appetizing meals\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Puppies may lose their appetite due to teething or minor stomach upset, so monitor their behavior\n";
    recommendation += "• Make sure they are eating nutrient-rich food suitable for their growth stage\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Loss of appetite could be due to stress, so ensure a calm environment for your pet\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Loss of appetite in older pets can indicate dental disease, kidney failure, or other underlying conditions\n";
    recommendation += "• Schedule a veterinary check-up to address potential age-related issues such as organ function decline\n";
  }
}


// Excessive Sleeping
else if (mainSymptom === "Excessive Sleeping") {
  recommendation += "• Ensure your pet has a comfortable and quiet place to sleep\n";
  recommendation += "• Observe for any signs of discomfort or pain while sleeping\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Puppies may sleep more as they are growing and need extra rest\n";
    recommendation += "• Make sure they are getting the proper amount of sleep to support their growth\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Ensure your pet is getting enough mental and physical stimulation during waking hours\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Senior pets may sleep more due to natural aging, but excessive sleep can indicate a health issue\n";
    recommendation += "• Schedule regular veterinary check-ups to ensure there are no underlying health problems affecting their energy levels\n";
  }
}

// Difficulty Breathing
else if (mainSymptom === "Difficulty Breathing") {
  recommendation += "• Keep your pet calm and avoid any physical exertion\n";
  recommendation += "• Seek immediate veterinary attention if breathing difficulty persists\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Difficulty breathing in puppies may indicate respiratory infections or congenital issues\n";
    recommendation += "• Ensure your puppy is not exposed to irritants or allergens that could worsen symptoms\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Senior pets may develop heart or lung issues, so prompt veterinary care is essential\n";
    recommendation += "• Monitor for signs of heart disease, such as coughing, weakness, or reduced exercise tolerance\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Ensure your pet is not overweight, as this can contribute to breathing issues\n";
  }
}


// Bad Breath
else if (mainSymptom === "Bad Breath") {
  recommendation += "• Regular teeth brushing is important to prevent plaque buildup\n";
  recommendation += "• Provide dental chews to help freshen your pet's breath\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Puppies may have bad breath due to teething, so ensure good oral hygiene from an early age\n";
    recommendation += "• Consider introducing dental training and oral care products early to prevent future issues\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Bad breath in senior pets can be a sign of dental disease or gastrointestinal issues, so consider a vet visit\n";
    recommendation += "• Regular dental checkups and cleanings are important to maintain oral health in older pets\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Regular dental care, such as brushing and chews, should be incorporated into your pet's routine\n";
  }
}

// Breathing Problems
else if (mainSymptom === "Breathing Problems") {
  recommendation += "• Keep your pet in a calm environment and monitor their breathing\n";
  recommendation += "• Seek immediate veterinary attention if breathing is labored or irregular\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Puppies may have underdeveloped respiratory systems, but any difficulty breathing should be evaluated by a vet\n";
    recommendation += "• Ensure your puppy isn't exposed to respiratory irritants, like smoke or dust\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Senior pets are more prone to respiratory diseases, including heart disease or lung infections\n";
    recommendation += "• Consider a regular check-up with the vet to monitor lung and heart health\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Keep your pet active but monitor for any unusual signs during exercise\n";
  }
}


// Seizures
else if (mainSymptom === "Seizures") {
  recommendation += "• Keep your pet in a safe area to prevent injury during a seizure\n";
  recommendation += "• Do not try to restrain your pet during a seizure, but ensure they are comfortable\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Seizures in puppies can be due to genetic conditions, so a vet consultation is important\n";
    recommendation += "• Monitor for other symptoms such as abnormal behavior or weakness\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Seizures in senior pets may be related to age-related neurological conditions or diseases\n";
    recommendation += "• Consider regular veterinary check-ups to monitor neurological health\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Ensure that your pet's health is monitored, as seizures can be related to underlying issues like epilepsy\n";
  }
}


// Swelling
else if (mainSymptom === "Swelling") {
  recommendation += "• Check for signs of injury or infection in the swollen area\n";
  recommendation += "• Apply a cold compress to reduce swelling and seek veterinary advice\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Swelling in puppies could be due to injury or teething, so observe closely\n";
    recommendation += "• Ensure there are no harmful objects or areas they could injure themselves in\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• In senior pets, swelling could indicate arthritis, tumors, or fluid retention, so a vet visit is crucial\n";
    recommendation += "• Regular check-ups are important to catch age-related health issues early\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Ensure proper exercise and monitor for any further swelling or signs of discomfort\n";
  }
}


// Lumps
else if (mainSymptom === "Lumps") {
  recommendation += "• Have any new lumps evaluated by a vet to rule out tumors or growths\n";
  recommendation += "• Do not attempt to pop or squeeze the lump, as it could worsen the condition\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Lumps in puppies may be harmless, but always consult a vet to ensure they are not abscesses or infections\n";
    recommendation += "• Monitor the lump for any changes in size, color, or texture\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• In senior pets, lumps may be more concerning and require a biopsy to determine if they are benign or malignant\n";
    recommendation += "• Senior pets are more prone to developing tumors, so early evaluation is important\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Regular vet check-ups are important to monitor any unusual growths\n";
  }
}


// Pain
else if (mainSymptom === "Pain") {
  recommendation += "• Avoid physical exertion and provide a comfortable space for rest\n";
  recommendation += "• Consult a vet for pain management and diagnosis\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Puppies may experience pain from teething or minor injuries, so monitor carefully\n";
    recommendation += "• Ensure proper exercise to prevent injuries from overactivity\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Older pets may experience joint pain, arthritis, or other age-related conditions that need veterinary attention\n";
    recommendation += "• Regular vet visits for joint health and pain management options are recommended\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Ensure proper exercise to maintain a healthy weight and reduce strain on joints\n";
  }
}


// Weight Loss
else if (mainSymptom === "Weight Loss") {
  recommendation += "• Monitor your pet's diet and ensure they are eating enough to maintain a healthy weight\n";
  recommendation += "• Seek veterinary help if weight loss is unexplained or rapid, as it could signal an underlying condition\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Weight loss in puppies could indicate parasitic infections, so ensure proper deworming\n";
    recommendation += "• Ensure a well-balanced diet to support growth and development\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Weight loss in senior pets could indicate kidney disease, diabetes, or cancer, so timely veterinary evaluation is important\n";
    recommendation += "• Ensure regular vet check-ups to monitor for chronic conditions\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Ensure your pet is maintaining a balanced diet and avoid sudden changes in their feeding routine\n";
  }
}


// Yellow Eyes
else if (mainSymptom === "Yellow Eyes") {
  recommendation += "• Yellow eyes may indicate liver disease, jaundice, or an infection, so seek veterinary attention immediately\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Jaundice in puppies may be related to viral infections or inherited conditions\n";
    recommendation += "• Ensure proper vaccination and regular vet check-ups to monitor for early signs of infections\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• In senior pets, yellow eyes could indicate liver disease, gallbladder issues, or other serious conditions\n";
    recommendation += "• Senior pets should have regular health check-ups to detect underlying liver or metabolic issues early\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Ensure your pet’s liver function is regularly checked through veterinary exams\n";
  }
}


// Excessive Licking
else if (mainSymptom === "Excessive Licking") {
  recommendation += "• Ensure your pet's environment is free from stressors or anxiety triggers\n";
  recommendation += "• Monitor for signs of skin infections, allergies, or wounds caused by excessive licking\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Puppies may lick excessively due to teething or anxiety, so provide appropriate chew toys\n";
    recommendation += "• Offer a calming environment and provide proper training to reduce anxiety-based licking\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• In senior pets, excessive licking may be a sign of arthritis or other joint issues that cause discomfort\n";
    recommendation += "• Senior pets may also lick as a response to pain, so a veterinary check-up is recommended\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• If licking is due to stress, consider offering enrichment activities or anxiety-reducing strategies\n";
  }
}


// Excessive Barking
else if (mainSymptom === "Excessive Barking") {
  recommendation += "• Assess whether there are environmental factors causing stress or anxiety for your pet\n";
  recommendation += "• Provide mental stimulation and exercise to prevent boredom\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Puppies may bark excessively due to excitement or need for attention, so ensure proper training\n";
    recommendation += "• Provide consistent socialization and positive reinforcement to address barking issues\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Older pets may bark due to confusion or cognitive dysfunction, so monitor for other signs of aging\n";
    recommendation += "• If barking is due to cognitive decline, consider consulting with a vet for management options\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• If barking is stress-related, consider enrichment activities and relaxation techniques\n";
  }
}

// Blood in Stool
else if (mainSymptom === "Blood in Stool") {
  recommendation += "• Monitor for signs of digestive distress or infection\n";
  recommendation += "• Keep your pet hydrated and avoid feeding them anything that could irritate their stomach\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Blood in stool in puppies may indicate parasites or infections, so consult a vet for stool analysis\n";
    recommendation += "• Ensure your puppy is regularly dewormed to prevent parasitic infections\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• In senior pets, blood in stool could signal gastrointestinal issues like ulcers or tumors\n";
    recommendation += "• Senior pets may have a weakened digestive system, so regular vet visits are essential\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Avoid foods that may irritate the digestive tract, such as fatty or spicy foods\n";
  }
}

// Blood in Urine
else if (mainSymptom === "Blood in Urine") {
  recommendation += "• Seek immediate veterinary care as blood in urine could indicate urinary tract infections or stones\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• In puppies, blood in urine might be due to bladder infections or congenital issues\n";
    recommendation += "• Ensure proper hydration and monitor for other signs like frequent urination\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Senior pets are more prone to urinary tract infections or kidney disease, which may cause blood in the urine\n";
    recommendation += "• In older pets, blood in urine may also indicate bladder tumors, so seek prompt veterinary attention\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Ensure that your pet is properly hydrated and monitor their urination habits\n";
  }
}


// Coughing
else if (mainSymptom === "Coughing") {
  recommendation += "• Keep your pet indoors in a dust-free environment and monitor their coughing frequency\n";
  recommendation += "• Consult your vet to rule out respiratory infections, heart disease, or allergies\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Puppies are more prone to respiratory infections, so ensure they are vaccinated against kennel cough\n";
    recommendation += "• Ensure proper vaccination and prevent exposure to other sick pets\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Coughing in senior pets could indicate heart disease or chronic respiratory conditions, so seek veterinary evaluation\n";
    recommendation += "• Senior pets may require special respiratory care, such as medication for heart-related conditions\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Ensure your pet is getting enough exercise to maintain respiratory health\n";
  }
}


// Seizures
else if (mainSymptom === "Seizures") {
  recommendation += "• Keep your pet in a safe space during seizures to prevent injury\n";
  recommendation += "• Note the duration and frequency of seizures and consult your vet for possible causes\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Puppies may experience seizures due to genetic conditions or infections, so seek veterinary consultation\n";
    recommendation += "• In some cases, seizures can be related to hypoglycemia, so ensure your puppy's blood sugar is stable\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Seizures in senior pets can indicate underlying neurological conditions such as brain tumors or epilepsy\n";
    recommendation += "• Senior pets may require specialized tests, such as MRI or CT scans, to determine the cause\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Ensure proper weight management and limit stressors that could trigger seizures\n";
  }
}


// Anal Gland Problems
else if (mainSymptom === "Anal Gland Problems") {
  recommendation += "• Keep your pet from scooting or licking excessively around the rear end\n";
  recommendation += "• Seek a vet to express the anal glands if they become impacted\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Puppies may experience anal gland issues due to improper diet or grooming habits\n";
    recommendation += "• Ensure proper grooming and consult with your vet for advice on how to prevent future issues\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Older pets may experience more frequent anal gland problems, which can be managed with diet and regular vet visits\n";
    recommendation += "• Consider a specialized diet with fiber to support healthy anal gland function\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Ensure regular check-ups to monitor anal gland health and prevent issues\n";
  }
}


// Flatulence
else if (mainSymptom === "Flatulence") {
  recommendation += "• Ensure your pet is on a balanced diet with proper fiber content\n";
  recommendation += "• Avoid feeding your pet human food or foods that cause gas, such as beans and dairy\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Puppies may experience gas from trying new foods, so introduce foods gradually\n";
    recommendation += "• Ensure that their food is suitable for their age and avoid abrupt changes in diet\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Senior pets may experience digestive changes, so consult a vet to manage their diet and prevent excessive gas\n";
    recommendation += "• Consider a senior-specific diet that is easier on their digestive system\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Ensure that your pet's food is suitable for their activity level and health needs\n";
  }
}


// Stomach Noises
else if (mainSymptom === "Stomach Noises") {
  recommendation += "• Ensure your pet is eating slowly and not gulping their food, as this can cause stomach discomfort\n";
  recommendation += "• Monitor for other signs of digestive distress, such as vomiting or diarrhea\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Puppies may have sensitive stomachs, so try feeding smaller, more frequent meals\n";
    recommendation += "• Consider providing food specifically designed for puppies to promote digestion\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Stomach noises in older pets can indicate digestive issues or gastrointestinal distress, so consult a vet\n";
    recommendation += "• A senior-friendly diet with easy-to-digest ingredients can help prevent stomach issues\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Look for high-quality food that supports digestive health and prevent overfeeding\n";
  }
}


// Snoring
else if (mainSymptom === "Snoring") {
  recommendation += "• If snoring becomes excessive, consider adjusting your pet's sleeping position or environment\n";
  recommendation += "• Consult a vet if snoring is accompanied by breathing difficulties or fatigue\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Snoring in puppies may be due to their smaller respiratory tracts, but ensure they are breathing freely\n";
    recommendation += "• Puppies with snoring may also be teething, which can lead to temporary airway discomfort\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• In senior pets, snoring can be a sign of obesity or airway issues, so monitor their health closely\n";
    recommendation += "• Obesity can worsen snoring, so ensure your senior pet maintains a healthy weight\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Ensure your pet has a comfortable sleeping environment that doesn't strain their breathing\n";
  }
}


// Excessive Thirst
else if (mainSymptom === "Excessive Thirst") {
  recommendation += "• Ensure fresh water is always available for your pet\n";
  recommendation += "• Monitor your pet's urination patterns, as excessive thirst can indicate kidney or diabetes issues\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Puppies may drink excessively if they are overly active or teething, but ensure they are not dehydrated\n";
    recommendation += "• Monitor their water intake if they are teething, as some puppies may drink more due to discomfort\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• In senior pets, excessive thirst could be a sign of kidney disease or diabetes, so consult a vet for a diagnosis\n";
    recommendation += "• Senior pets are more susceptible to kidney issues, so regular vet check-ups are important\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• Ensure your pet is maintaining a balanced water intake, as dehydration can lead to more health issues\n";
  }
}


// Drooling
else if (mainSymptom === "Drooling") {
  recommendation += "• Ensure that your pet's oral hygiene is maintained to prevent dental issues\n";
  recommendation += "• Monitor your pet for signs of nausea or anxiety that could be causing excessive drooling\n";
  
  if (age === "Puppy (up to 2 years old)") {
    recommendation += "• Drooling in puppies can be due to teething, but make sure there are no obstructions in their mouth\n";
    recommendation += "• Teething puppies may drool more, so ensure they have safe chew toys to relieve discomfort\n";
  } else if (age === "Senior (8+ years old)") {
    recommendation += "• Senior pets may drool excessively due to dental issues or nausea, so a vet check-up is recommended\n";
    recommendation += "• Dental cleanings and regular vet visits are especially important for senior pets to prevent oral health issues\n";
  } else if (age === "Adult (2-7 years old)") {
    recommendation += "• Consider a change in diet or consult with your veterinarian for a recommended diet\n";
    recommendation += "• If drooling is sudden or excessive, consult a vet to rule out health problems such as dental or gastrointestinal issues\n";
  }
}





    
    // Add spay/neuter recommendation for intact pets with relevant symptoms
    if (!isSpayed) {
      const reproductiveSymptoms = ["Aggression", "Urination Changes", "Swelling", "Bleeding", "Excessive Licking"];
      if (reproductiveSymptoms.includes(mainSymptom)) {
        recommendation += `• Consider discussing ${sex === "Male" ? "neutering" : "spaying"} with your veterinarian as a preventive measure\n`;
      }
    }
    
    return recommendation;
  }

  // Save session data to database or storage
  async saveSession(sessionData) {
    try {
      // In a real implementation, this would connect to your database
      console.log("Saving session data:", sessionData);
      
      // Simulate API call with a promise
      return new Promise((resolve) => {
        setTimeout(() => {
          // Generate a random session ID
          const sessionId = Math.random().toString(36).substring(2, 15);
          resolve({
            success: true,
            sessionId: sessionId,
            message: "Session saved successfully"
          });
        }, 500);
      });
    } catch (error) {
      console.error("Error saving session:", error);
      throw new Error("Failed to save session data");
    }
  }

  // Get session data by ID
  async getSession(sessionId) {
    try {
      // In a real implementation, this would fetch from your database
      console.log("Fetching session:", sessionId);
      
      // Simulate API call with a promise
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (sessionId) {
            // Mock session data
            resolve({
              success: true,
              sessionData: {
                petType: "Dog",
                petName: "Max",
                sex: "Male",
                age: "Adult (2-7 years old)",
                isSpayed: true,
                mainSymptom: "Limping",
                timestamp: new Date().toISOString()
              }
            });
          } else {
            reject(new Error("Invalid session ID"));
          }
        }, 500);
      });
    } catch (error) {
      console.error("Error fetching session:", error);
      throw new Error("Failed to retrieve session data");
    }
  }
}

export default PetSymptomModel;