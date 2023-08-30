const q="data:audio/mpeg;base64,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ADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";export{q as default};