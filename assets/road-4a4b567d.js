const q="data:audio/mpeg;base64,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";export{q as default};
