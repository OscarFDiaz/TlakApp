const q="data:audio/mpeg;base64,//NExAARUNYsANpScAGAGtqpgYQOAapmQv1KZfeztiAyTkCrROpnXkwvWw9f+she1i5QhHgbFC9eCcjAWFgGQBM1pct//rIA4JgAFkhEgCbP+pUFsIe8YmVnZTs6Bmpe//NExA0Q6fKEAKHEmH3+n/qefxoIBZqfnsYynP/+p6n///q/zvOdvkIzBxahxaHBAcIA+rp5yCDg/5cDvPl2BiIKcPoM2kz/sur+tv/9rPeCO/fy//n0neYj////997T//NExBwYmxaUAICQuY7mjKUouW7FCxcVUOw/sw4sstijE6GjxdFscPFINH3Ui4PgvBWAuH5EDBEUXD8XcaMFBxcGGNNomIYxBxA5WR68hEUXyKH1DZv/////z/l////y//NExAwUsxqkAFBQvf//r/rqr7mtNL9FZeuaYqVIHMp58OPz9fdGpEbixpQ8DhFsRBwg0OAiFVUoWFhjKx4xxA0EtwKg3FTg9D+BizBBmia5ii49CA7/2////6+b//////NExAwVIx6sAChSvP//////frfn9/PvzP579lm4pD7DvTM20jI2usghSmTanvh6xxQNWRIysgwPrvhRjZR3Z9ctOZNNYgKoTbyY9aDLb6Nu2pzlb7UDt////9/////1//NExAoSAw64ACgQuRPPH38l2cmOnH4dy9tVSOaoWQ/HzjYGh2JwUCCECXicUOaHm5uKppWpP6HJM49LHOMVSkeuLQQ6jtPKYkDkGb///7rqP/+P5n//76ZwxKlF0Tdd//NExBUU8xa0ABAWuUuTVJtH01TrCnu7SOiRMkmY8kNQ/KsYqqaFzz55hsw0gkKNdnmqUcWR3KaBxOHMQop2TKtUmlFUiS1Ss+06SQF///+vK////////x/KW0RMlDHu//NExBQSKtK4ACgQuSSTJGHCU0QiwbA1QNlApHG24ggFEcK4sczWdrF6Ut/t2pvJOZjyx0sQLMNODiYGEJXpKxMyGWGsuGZ66////////////v257+LJNGC00LGx5Vow//NExB4Rcu6YAGgQuXQekB0HYVLER1V0JHHOqs0r8k1Df8NfF8iqHLNWsXBxNr8WSJOiqioD64zFkm5iqy////////////9DGNJ/opjXXMkz2SZ83QSDxSiQeDxxADHD//NExCsQKjJkAVMoAMEQ4AQsBWFg7W724dU86WeDT3EtT1UV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";export{q as default};
