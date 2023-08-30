const q="data:audio/mpeg;base64,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";export{q as default};
