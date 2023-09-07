const q="data:audio/mpeg;base64,//NExAARkG4AAVoYADKBiASad+c+udeicNmZ8agPYeiooIuxdjEGuP5GKSnp6enp6ent5ggCAIHOD44H3iAMf8o7+JAQ4Ph/Ehz/qBD6/xOHy4fVCJNFnZQPtJQ5fzwM//NExAwVgyaAAZmAAHiin/n53SFAH4400/8nDM3IJ/5cNC+m//5YEKDQBtgFzBIf/4ggOA0IOZm6H//5mbjMEQWOA0ZP///8vpl9P+n/////6bzd7ZcQg8dDCiQ98kGp//NExAkSiY7EAZhAAAFKKtFZJ4EpChNcfJMk9ZSPTE8WF2ufqbjniv/mo4678XJAmaTIqIwKTysQwsLhZldIn8ll1zKGIZT1vjvcRyqVKoRr8ar+hlFjLkFJVGbG8ct///NExBEUierAAdlYAOtDFr//9Z//LP/n///+/+GmprniKKBWTYtEtPnvUXadTawbUT97GJsn7dcxctUhtZ0nD6qdhrpn/OWdIh1f///11YZy39VVIRwt9ZtYtLNBQHlw//NExBEVyeKwAMtQmOFNIviBA2yGrSJI08xJRuiZGnWih6nQ1EkC8Wd6EEFwZEd14sybgOhOKEmmx2HhETTRHx1fzTDe9bHOfx/5Q57v///z2jWqg/+fVfYqwnI5bpXE//NExAwUWWKsANNWlACUH6cNmzTAngMsv+Vp/JpTfzz9JJBlfSI7DlmIAoakcmT21A3P3+xN8ONicSR8YyLRUd50BxKIxO8OgnOgT/////tSfXWmx7zdKI1BrCtqYfZl//NExA0TWcasAMtQlWZ05EetFJRPCegPZ+86O46/WYD3PL0i8i/SODxK3EcFoL59RU2n/lpv2Y5HPYQhGFTjKprib////nq8pyAd/zMKJjJbrfYmSvGfGGDshW/MEwF6//NExBIR2UKgAMyWcMA9CERSmBAxBATmf8miTT9xgPp//SHVV7FQWCYgEIqikdKRoz/d/unquXQbHyIaAuv+RWWDtU57euT0OhUQNBvA4kawrDTVvEKEq6O9y/tgQJY5//NExB0R0TaQAN4QcJzf/uZcixrWCgVC9/7I7T5QNghES45UVGV/63/BVmNrd//qdrf/////5FUelQu32TP8lqaeCA5COilV2VSxugANFQwIOXzMvi1DVVfURxIqTd0E//NExCgRgd6MANSEmQsG/1HH2ZApDkltM5jWG768lkFEO///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";export{q as default};