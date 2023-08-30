const q="data:audio/mpeg;base64,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TDk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExMYSELU8AGJGTDk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";export{q as default};
