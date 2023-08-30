const q="data:audio/mpeg;base64,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";export{q as default};
