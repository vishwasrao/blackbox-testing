var readingsToBeRemoved = [
    ObjectId("57eb6cdae4b0f1b5fba71cb8"),
    ObjectId("57eb6cdae4b0f1b5fba71cb6"),
    ObjectId("57eb6cdae4b0f1b5fba71cb4"),
    ObjectId("57eb6cdae4b0f1b5fba71cb2"),
    ObjectId("57eb6cdae4b0f1b5fba71cb0"),
    ObjectId("57eb6cdae4b0f1b5fba71cae"),
    ObjectId("57eb6cdae4b0f1b5fba71cac"),
    ObjectId("57eb6cdae4b0f1b5fba71caa"),
    ObjectId("57eb6cdae4b0f1b5fba71ca8"),
    ObjectId("57eb6cdae4b0f1b5fba71ca6"),
    ObjectId("57eb6cdae4b0f1b5fba71ca4"),
    ObjectId("57eb6cdae4b0f1b5fba71ca2"),
    ObjectId("57eb6cdae4b0f1b5fba71ca0"),
    ObjectId("57eb6cdae4b0f1b5fba71c9e"),
    ObjectId("57eb6cdae4b0f1b5fba71c9c"),
    ObjectId("57eb6cdae4b0f1b5fba71c9a"),
    ObjectId("57eb6cdae4b0f1b5fba71c98"),
    ObjectId("57eb6cdae4b0f1b5fba71c96"),
    ObjectId("57eb6cdae4b0f1b5fba71c94"),
    ObjectId("57eb6cd9e4b0f1b5fba71c92"),
    ObjectId("57eb6cd9e4b0f1b5fba71c90"),
    ObjectId("57eb6cd9e4b0f1b5fba71c8e"),
    ObjectId("57eb6cd9e4b0f1b5fba71c8c"),
    ObjectId("57eb6cd9e4b0f1b5fba71c8a"),
    ObjectId("57eb6cd9e4b0f1b5fba71c88"),
    ObjectId("57eb6cd9e4b0f1b5fba71c86"),
    ObjectId("57eb6cd9e4b0f1b5fba71c84"),
    ObjectId("57eb6cd9e4b0f1b5fba71c82"),
    ObjectId("57eb6cd9e4b0f1b5fba71c80"),
    ObjectId("57eb6cd9e4b0f1b5fba71c7e"),
    ObjectId("57eb6cd9e4b0f1b5fba71c7c"),
    ObjectId("57eb6cd9e4b0f1b5fba71c7a"),
    ObjectId("57eb6cd9e4b0f1b5fba71c78"),
    ObjectId("57eb6cd9e4b0f1b5fba71c76"),
    ObjectId("57eb6cd9e4b0f1b5fba71c74"),
    ObjectId("57eb6cd9e4b0f1b5fba71c72"),
    ObjectId("57eb6cd9e4b0f1b5fba71c70"),
    ObjectId("57eb6cd9e4b0f1b5fba71c6e"),
    ObjectId("57eb6cd9e4b0f1b5fba71c6c"),
    ObjectId("57eb6cd9e4b0f1b5fba71c6a"),
    ObjectId("57eb6cd9e4b0f1b5fba71c68"),
    ObjectId("57eb6cd9e4b0f1b5fba71c66"),
    ObjectId("57eb6cd9e4b0f1b5fba71c64"),
    ObjectId("57eb6cd9e4b0f1b5fba71c62"),
    ObjectId("57eb6cd8e4b0f1b5fba71c60"),
    ObjectId("57eb6cd8e4b0f1b5fba71c5e"),
    ObjectId("57eb6cd8e4b0f1b5fba71c5c"),
    ObjectId("57eb6cd8e4b0f1b5fba71c5a"),
    ObjectId("57eb6cd8e4b0f1b5fba71c58"),
    ObjectId("57eb6cd8e4b0f1b5fba71c56"),
    ObjectId("57eb6cd8e4b0f1b5fba71c54"),
    ObjectId("57eb6cd8e4b0f1b5fba71c52"),
    ObjectId("57eb6cd8e4b0f1b5fba71c50"),
    ObjectId("57eb6cd8e4b0f1b5fba71c4e"),
    ObjectId("57eb6cd8e4b0f1b5fba71c4c"),
    ObjectId("57eb6cd8e4b0f1b5fba71c4a"),
    ObjectId("57eb6cd8e4b0f1b5fba71c48"),
    ObjectId("57eb6cd8e4b0f1b5fba71c46"),
    ObjectId("57eb6cd8e4b0f1b5fba71c44"),
    ObjectId("57eb6cd8e4b0f1b5fba71c42"),
    ObjectId("57eb6cd8e4b0f1b5fba71c40"),
    ObjectId("57eb6cd8e4b0f1b5fba71c3e"),
    ObjectId("57eb6cd8e4b0f1b5fba71c3c"),
    ObjectId("57eb6cd8e4b0f1b5fba71c3a"),
    ObjectId("57eb6cd8e4b0f1b5fba71c38"),
    ObjectId("57eb6cd8e4b0f1b5fba71c36"),
    ObjectId("57eb6cd8e4b0f1b5fba71c34"),
    ObjectId("57eb6cd7e4b0f1b5fba71c32"),
    ObjectId("57eb6cd7e4b0f1b5fba71c30"),
    ObjectId("57eb6cd7e4b0f1b5fba71c2e"),
    ObjectId("57eb6cd7e4b0f1b5fba71c2c"),
    ObjectId("57eb6cd7e4b0f1b5fba71c2a"),
    ObjectId("57eb6cd7e4b0f1b5fba71c28"),
    ObjectId("57eb6cd7e4b0f1b5fba71c26"),
    ObjectId("57eb6cd7e4b0f1b5fba71c24"),
    ObjectId("57eb6cd7e4b0f1b5fba71c22"),
    ObjectId("57eb6cd7e4b0f1b5fba71c20"),
    ObjectId("57eb6cd7e4b0f1b5fba71c1e"),
    ObjectId("57eb6cd7e4b0f1b5fba71c1c"),
    ObjectId("57eb6cd7e4b0f1b5fba71c1a"),
    ObjectId("57eb6cd7e4b0f1b5fba71c18"),
    ObjectId("57eb6cd7e4b0f1b5fba71c16"),
    ObjectId("57eb6cd7e4b0f1b5fba71c14"),
    ObjectId("57eb6cd7e4b0f1b5fba71c12"),
    ObjectId("57eb6cd7e4b0f1b5fba71c10"),
    ObjectId("57eb6cd7e4b0f1b5fba71c0e"),
    ObjectId("57eb6cd7e4b0f1b5fba71c0c"),
    ObjectId("57eb6cd7e4b0f1b5fba71c0a"),
    ObjectId("57eb6cd7e4b0f1b5fba71c08"),
    ObjectId("57eb6cd7e4b0f1b5fba71c06"),
    ObjectId("57eb6cd7e4b0f1b5fba71c04"),
    ObjectId("57eb6cd7e4b0f1b5fba71c02"),
    ObjectId("57eb6cd7e4b0f1b5fba71c00"),
    ObjectId("57eb6cd7e4b0f1b5fba71bfe"),
    ObjectId("57eb6cd7e4b0f1b5fba71bfc"),
    ObjectId("57eb6cd7e4b0f1b5fba71bfa"),
    ObjectId("57eb6cd7e4b0f1b5fba71bf8"),
    ObjectId("57eb6cd7e4b0f1b5fba71bf6"),
    ObjectId("57eb6cd6e4b0f1b5fba71bf4"),
    ObjectId("57eb6cd6e4b0f1b5fba71bf2"),
    ObjectId("57eb6cd6e4b0f1b5fba71bf0"),
    ObjectId("57b9fe08189b95b8afcdafd4"),
    ObjectId("57e745efe4b0ca8e6d7116d7"),
    ObjectId("57e866d5e4b0ca8e6d73a3c2"),
    ObjectId("57e866d5e4b0ca8e6d73a3c3"),
    ObjectId("57e866d5e4b0ca8e6d73a3c4"),
    ObjectId("57e745e8e4b0ca8e6d7116bd"),
    ObjectId("57e745e8e4b0ca8e6d7116bc"),
    ObjectId("57e745e8e4b0ca8e6d7116be"),
    ObjectId("57e745e8e4b0ca8e6d7116bf"),
    ObjectId("57e745e8e4b0ca8e6d7116c0"),
    ObjectId("57e745e8e4b0ca8e6d7116c1"),
    ObjectId("57e745e8e4b0ca8e6d7116c2"),
    ObjectId("57e87484e4b0ca8e6d73c2ef"),
    ObjectId("57e87484e4b0ca8e6d73c2f0"),
    ObjectId("57e87484e4b0ca8e6d73c2f1"),
    ObjectId("57e8747fe4b0ca8e6d73c2e2"),
    ObjectId("57e8747fe4b0ca8e6d73c2e3"),
    ObjectId("57e8747fe4b0ca8e6d73c2e4"),
    ObjectId("57e87479e4b0ca8e6d73c2d5"),
    ObjectId("57e87479e4b0ca8e6d73c2d6"),
    ObjectId("57e87479e4b0ca8e6d73c2d7"),
    ObjectId("57e87473e4b0ca8e6d73c2c8"),
    ObjectId("57e87473e4b0ca8e6d73c2c9"),
    ObjectId("57e87473e4b0ca8e6d73c2ca"),
    ObjectId("57e8746ee4b0ca8e6d73c2bb"),
    ObjectId("57e8746ee4b0ca8e6d73c2bc"),
    ObjectId("57e8746ee4b0ca8e6d73c2bd"),
    ObjectId("57e87468e4b0ca8e6d73c2ae"),
    ObjectId("57e87468e4b0ca8e6d73c2af"),
    ObjectId("57e87468e4b0ca8e6d73c2b0"),
    ObjectId("57e87462e4b0ca8e6d73c2a1"),
    ObjectId("57e87462e4b0ca8e6d73c2a2"),
    ObjectId("57e87462e4b0ca8e6d73c2a3"),
    ObjectId("57e8745de4b0ca8e6d73c294"),
    ObjectId("57e8745de4b0ca8e6d73c295"),
    ObjectId("57e8745de4b0ca8e6d73c296"),
    ObjectId("57e87457e4b0ca8e6d73c287"),
    ObjectId("57e87457e4b0ca8e6d73c288"),
    ObjectId("57e87457e4b0ca8e6d73c289"),
    ObjectId("57e866dbe4b0ca8e6d73a3cd"),
    ObjectId("57e866d4e4b0ca8e6d73a3b9"),
    ObjectId("57e866cae4b0ca8e6d73a3ac"),
    ObjectId("57e866cae4b0ca8e6d73a3a6"),
    ObjectId("57e866c3e4b0ca8e6d73a392"),
    ObjectId("57e866b9e4b0ca8e6d73a385"),
    ObjectId("57e866b9e4b0ca8e6d73a37f"),
    ObjectId("57e866b2e4b0ca8e6d73a36b"),
    ObjectId("57e866a8e4b0ca8e6d73a35e"),
    ObjectId("57e866a8e4b0ca8e6d73a358"),
    ObjectId("57e866a8e4b0ca8e6d73a344"),
    ObjectId("57e59a71e4b0ca8e6d6d4cbe"),
    ObjectId("57e59a71e4b0ca8e6d6d4cbf"),
    ObjectId("57e59a71e4b0ca8e6d6d4cc0"),
    ObjectId("57e59a71e4b0ca8e6d6d4cbb"),
    ObjectId("57e745efe4b0ca8e6d711df1"),
    ObjectId("57e745efe4b0ca8e6d711df2"),
    ObjectId("57e745efe4b0ca8e6d711df3"),
    ObjectId("57e745efe4b0ca8e6d711df4"),
    ObjectId("57e745efe4b0ca8e6d711df5"),
    ObjectId("57e745efe4b0ca8e6d711df6"),
    ObjectId("57e745efe4b0ca8e6d711df7"),
    ObjectId("57e745efe4b0ca8e6d711df8"),
    ObjectId("57e745efe4b0ca8e6d711df9"),
    ObjectId("57e745efe4b0ca8e6d711f10"),
    ObjectId("57e866d4e4b0ca8e6d73a4b9"),
    ObjectId("57e866d4e4b0ca8e6d73a4b7"),
    ObjectId("57e866d4e4b0ca8e6d73a4b5"),
    ObjectId("57e866d4e4b0ca8e6d73a4b3"),
    ObjectId("57e866d4e4b0ca8e6d73a4b1"),
    ObjectId("57e866d4e4b0ca8e6d73a4c9"),
    ObjectId("57e866d4e4b0ca8e6d73a4c7"),
    ObjectId("57e866d4e4b0ca8e6d73a4c5"),
    ObjectId("57e866d4e4b0ca8e6d73a4c3"),
    ObjectId("57e866d4e4b0ca8e6d73a4c1"),
    ObjectId("57e745efe4b0ca8e6d711ef1")
];

db.reading.remove({
    _id: {
        $in: readingsToBeRemoved
    }
});
db.reading.remove({"name": "luminousIntensity"});
db.reading.remove({"name": "co2"});
