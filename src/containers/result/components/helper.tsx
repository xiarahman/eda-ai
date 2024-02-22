
export const getColorForEmotion = (emotion: string) => {
    switch (emotion.toLowerCase()) {
      case "happy":
        return "#FFF172";
      case "sad":
        return "#56577A";
      case "angry":
        return "#FF1500";
      case "fear":
        return "#9C9DD7";
      case "neutral":
        return "#AFAFAF";
      default:
        return "#000000";
    }
  };
  
  export const getColorForSentiment = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case "Positive":
        return "#FF4D4F";
      case "negative":
        return "#1890FF";
      case "neutral":
        return "#AFAFAF";
      default:
        return "#000000";
    }
  };
  export const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  export const mapEmotions = (emotions: any[]) => {
    return emotions
      .filter((emotion) => emotion.percentage > 0)
      .map((emotion) => capitalizeFirstLetter(emotion.emotion));
  };
  
  export const mapSentiments = (sentiments: any[]) => {
    return sentiments
      .filter((sentiment) => sentiment.percentage > 0)
      .map((sentiment) => capitalizeFirstLetter(sentiment.sentiment));
  };
  