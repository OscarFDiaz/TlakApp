const q="data:audio/mpeg;base64,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";export{q as default};
