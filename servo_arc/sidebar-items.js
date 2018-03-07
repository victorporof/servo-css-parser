initSidebarItems({"struct":[["Arc",""],["ArcBorrow","A \"borrowed Arc\". This is a pointer to a T that is known to have been allocated within an Arc."],["HeaderSlice","Structure to allow Arc-managing some fixed-sized data and a variably-sized slice in a single allocation."],["HeaderWithLength","Header data with an inline length. Consumers that use HeaderWithLength as the Header type in HeaderSlice can take advantage of ThinArc."],["NonZeroPtrMut","Wrapper type for pointers to get the non-zero optimization. When NonZero/Shared/Unique are stabilized, we should just use Shared here to get the same effect. Gankro is working on this in [1]."],["RawOffsetArc","An Arc, except it holds a pointer to the T instead of to the entire ArcInner."],["ThinArc",""],["UniqueArc","An Arc that is known to be uniquely owned"]]});