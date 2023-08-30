const q="data:audio/mpeg;base64,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";export{q as default};
