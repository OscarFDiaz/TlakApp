const q="data:audio/mpeg;base64,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";export{q as default};
