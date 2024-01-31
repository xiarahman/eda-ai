export interface AnalysisResultProps {
    result: {
      detailed_analysis: {
        emotion_percentages: { [key: string]: number };
        pred_emotion: string;
        pred_sentiment: string;
        sentence: string;
       
      }[];
      top_three_emotions: { emotion: string; percentage: number }[];
      top_three_sentiments: { sentiment: string; percentage: number }[];
    };
  }