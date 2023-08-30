const q="data:audio/mpeg;base64,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cDk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExNgRcL28AHpMTDk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";export{q as default};
