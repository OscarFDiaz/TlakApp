const q="data:audio/mpeg;base64,//NExAARYJ4YANsGTD0S83iOGoAUCEsUyFwQVBxoCapY4v8roJPyixTSm9NL/RAMcIse4yESAPl2ATnCAkOW3F+fw+f+Xe0LU77vU7//2oCzuQU59AUThHcM7NvHergQ//NExA0RyOpgAMmEcPF2Vp+xjRnZo7fzgmO/IEIUDd+gAwnPiScrJnCgYRkyA16nfLzkp7vW8/XlPqcAw+Cawf7ChOUJicgqAHUzr1WoJkXdmW56mZKi6pRKyb0LTkAQ//NExBgYexqAAJFKvFIcZVTRqo/WhNLqc5LkkOjaMm+09b2kq+v88793ZKOSRkVBQX7SHR2IKEagoih8eqoJg4fOA4kBBNyi5COriAiHxeICZxIVMHGRAFC038+e//13//NExAkU4xqUAFBQvf5//U9+WdflFTB3//fp///3Cul6f/P/fMTqvu0vE6VFkDt5e3sbaXFju6x491J4INExwLGMFAcJsg9hANGFCKIwN6UUDhkE4NxiNQHaX9b////m//NExAgS0xacAChOuX/1Ls/VmbX/9//p/pQ3qjLu3auzdjK6OqXcpY42hpyFHONnzmIEmHcyUCwjlRaIobLBIYI5AkIw8NziI6eayy54vQGVAiH5////8v//4fw///i///NExA8U0yKgAFBavP9+pqf3f1Pa19Vd+ttbLqzRS01qRRcxXTppK70VKYzRRMUCovEIhpFs4gkEXJwjBKEuFULow6AcsdSSJ5eJGaF0tLDi1QFo/////7//l3l3+fN+//NExA4VQxqsADhWvX////////+ovm5v+W/XxxH225i7q5ZbHVD4qKtj4TzdlvefaiUHVDQwDySjZNQ6fMTyRoUg7JocLTw+FjDBAlE1I8IEfjcNAgO2n//////1n/////NExAwSGxa0ABBOuf////+ifbeqfo/NdjdlOsakddUU06TNNH0Mc9DNXNHY8caSE5ph6CcSSxURg2BYF4LRLLFSwgYdHSRI8eocf/////////L//////+67+jr/bWtu//NExBYQ+xqwABBOveffuuzVR1Ux1RUPOo7UNYoopQwejxZDywmBI8ZHwIBwjBEGgeBkHI0JlhSNiikg9o3hQMMQWBB010aTFwggO6nISdCXnQ+T//b//95P//////////NExCUROwa8AEiKua+b9fNbv0VHLVtFZ7gKIHCRxI7CQiJC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";export{q as default};
