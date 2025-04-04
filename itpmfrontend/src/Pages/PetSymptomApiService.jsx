
import PetSymptomModel from './PetSymptomModel';

class PetSymptomApiService {
  constructor() {
    this.model = new PetSymptomModel();
  }

  // Get all symptoms
  async getSymptoms() {
    try {
      const symptoms = this.model.getAllSymptoms();
      return {
        success: true,
        data: symptoms
      };
    } catch (error) {
      console.error("Error fetching symptoms:", error);
      return {
        success: false,
        error: "Failed to fetch symptoms"
      };
    }
  }

  // Get first aid info for a symptom
  async getFirstAidInfo(symptom) {
    try {
      const firstAidInfo = this.model.getFirstAidInfo(symptom);
      return {
        success: true,
        data: firstAidInfo
      };
    } catch (error) {
      console.error("Error fetching first aid info:", error);
      return {
        success: false,
        error: "Failed to fetch first aid information"
      };
    }
  }

  // Get recommendation based on pet info
  async getRecommendation(petInfo) {
    try {
      const recommendation = this.model.getRecommendation(petInfo);
      return {
        success: true,
        data: recommendation
      };
    } catch (error) {
      console.error("Error generating recommendation:", error);
      return {
        success: false,
        error: "Failed to generate recommendation"
      };
    }
  }

  // Save session data
  async saveSession(sessionData) {
    try {
      const result = await this.model.saveSession(sessionData);
      return result;
    } catch (error) {
      console.error("Error saving session:", error);
      return {
        success: false,
        error: "Failed to save session data"
      };
    }
  }

  // Get session by ID
  async getSession(sessionId) {
    try {
      const result = await this.model.getSession(sessionId);
      return result;
    } catch (error) {
      console.error("Error fetching session:", error);
      return {
        success: false,
        error: "Failed to fetch session data"
      };
    }
  }
}

export default PetSymptomApiService;