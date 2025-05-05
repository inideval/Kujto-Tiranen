const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient(); //interact w google vision

exports.analyzeWithGoogleVision = async (image) => {
  const [result] = await client.safeSearchDetection({//method from ImageAnnotatorClient
    image: {
      content: image.data,
    },
  });

  const detections = result.safeSearchAnnotation;

  return {
    adult: detections.adult,
    violence: detections.violence,
    racy: detections.racy,
    medical: detections.medical,
    spoof: detections.spoof,
  };
};
