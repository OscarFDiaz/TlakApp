const q="data:audio/mpeg;base64,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";export{q as default};
