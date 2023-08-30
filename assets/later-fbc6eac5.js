const q="data:audio/mpeg;base64,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ADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";export{q as default};
