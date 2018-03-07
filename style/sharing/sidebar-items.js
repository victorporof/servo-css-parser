initSidebarItems({"constant":[["SHARING_CACHE_SIZE","The amount of nodes that the style sharing candidate cache should hold at most.  We'd somewhat like 32, but ArrayDeque only implements certain backing store sizes.  A cache size of 32 would mean a backing store of 33, but that's not an implemented size: we can do 32 or 40."]],"enum":[["StyleSharingBehavior","Controls whether the style sharing cache is used."]],"struct":[["OpaqueComputedValues","Opaque pointer type to compare ComputedValues identities."],["StyleSharingCache","An LRU cache of the last few nodes seen, so that we can aggressively try to reuse their styles."],["StyleSharingCandidate","Information regarding a style sharing candidate, that is, an entry in the style sharing cache."],["StyleSharingTarget","An element we want to test against the style sharing cache."],["ValidationData","Some data we want to avoid recomputing all the time while trying to share style."]]});