const q="data:audio/mpeg;base64,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SDk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExLYSME3kANsGJDk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";export{q as default};