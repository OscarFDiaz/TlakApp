const q="data:audio/mpeg;base64,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ADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";export{q as default};