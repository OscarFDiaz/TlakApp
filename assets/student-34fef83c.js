const q="data:audio/mpeg;base64,//NExAASQFoUAMsMJB1snGOaJNUQAKeDhQYSvJYdC7vdyzAGxYEAdYDeUGgdg4In5QIOKHC+fLgSABoEtPrfROLIHM+gnEHYt635Q57+so6ckKnaEB8DXCCaKqS1IMtb//NExAoSYjp4AKBGuKDJv/15+QBjH/jcYxkODH/0/fRC0///hIVd9CcnfSuaaE7zePERP+v13cDMwii4EKt8o5pDtLgR2UJgRwDfPqUCXsj+t1t//++f/8YMi+/9uRaj//NExBMWgx6YAGhMvG2fe+/X1+++lPO5r56hvj1f9MztmU7X9k/cQawGLHlMEICwiIu04vu2JtllIFEMPJx2IDzLaWZGgceaHIIGC0zynJj0D0kIDD/////////////n//NExAwVeyKsAChQvP//z6f9/9dTzVZ93fdomiD6z1fsbQ+VkoYlEuJplxDOZUlnFRYcZA4k4YV5xNB07F0wgCKeUE4ExQOBMIYNxCAXAHF0OBucGEQcA5v///////////NExAkRoyK4ACgWvP7/h3Ns+v+f5+YqJup01UFD8rMp5SaNg0hipzZS7Mtfy65viJWebJrkdMgjoghvHeSDQ6Mx2jeT1jQH07M6ACaY3bm//z9//5/r//+c61////////NExBUWqx6sADhSvf//5/6l55n2G5f37/Xn/9lVYl47fSaWbjG2UkTX2F6qy6SaOiEsjGY+T3RJpnQFBkqwYIUKEl5kAs0AWgHiZMQsAGNHXzUGP/////8v/y/n//5H//NExA0VmxqsADhSvf//////////5+/l36y6qs/n5duqrP8/+R060SJ6lDJsMTTpBcCqGOoKNlLitBgoR2j6NGRqgDSDArLoyxAQGBBo/syOxG8gWVGKBI3///////////NExAkQUxqgAFAQvef//5Vdv/5WK/2b/U0oPrna9mlYFob1Ha0qioqsWpLM0yHIeh0DZSQ9ooGwNjwEQFgXHKpJoqKjahQJyicXKPTjW5w4zzO//////4xjf//kVw+j//NExBoSAgaYAHhKmBz2nJ/r/Q70JO6sc6CjQEAiEOc50DgoIBxofBAH1h8QUFDm8P1AgAO7KHKgfBBS+xnQBW4QZw1mIFHEbPFh5yB2sSDW5H/wNf6d/5vinflOOxxY//NExCUZKjqkAMIQuHZznAvBu02hiIlWnYgBQYYFhUxr5/7/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";export{q as default};
