const e=JSON.parse('{"key":"v-2163f696","path":"/posts/code/data_structure/6.%E6%A0%91.html","title":"树","lang":"en-US","frontmatter":{"icon":"lightbulb","description":"树 概念 高度、深度、层 二叉树 二叉树的存储：链表与数组 顺序存储法： 一般情况下，为了方便计算子节点，根节点会存储在下标为 1 的位置。如果节点 X 存储在数组中下标为 i 的位置，下标为 2 * i 的位置存储的就是左子节点，下标为 2 * i + 1 的位置存储的就是右子节点。反过来，下标为 i/2 的位置存储就是它的父节点。 完全二叉树 满二叉树是完全二叉树的一种特殊情况 如果某棵二叉树是一棵完全二叉树，那用数组存储无疑是最节省内存的一种方式。 这也是为什么完全二叉树会单独拎出来的原因，也是为什么完全二叉树要求最后一层的子节点都靠左的原因。 当我们讲到堆和堆排序的时候，你会发现，堆其实就是一种完全二叉树，最常用的存储方式就是数组。","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://liz-starfield.github.io/blog/zh/posts/code/data_structure/6.%E6%A0%91.html"}],["meta",{"property":"og:url","content":"https://liz-starfield.github.io/blog/posts/code/data_structure/6.%E6%A0%91.html"}],["meta",{"property":"og:site_name","content":"Liz"}],["meta",{"property":"og:title","content":"树"}],["meta",{"property":"og:description","content":"树 概念 高度、深度、层 二叉树 二叉树的存储：链表与数组 顺序存储法： 一般情况下，为了方便计算子节点，根节点会存储在下标为 1 的位置。如果节点 X 存储在数组中下标为 i 的位置，下标为 2 * i 的位置存储的就是左子节点，下标为 2 * i + 1 的位置存储的就是右子节点。反过来，下标为 i/2 的位置存储就是它的父节点。 完全二叉树 满二叉树是完全二叉树的一种特殊情况 如果某棵二叉树是一棵完全二叉树，那用数组存储无疑是最节省内存的一种方式。 这也是为什么完全二叉树会单独拎出来的原因，也是为什么完全二叉树要求最后一层的子节点都靠左的原因。 当我们讲到堆和堆排序的时候，你会发现，堆其实就是一种完全二叉树，最常用的存储方式就是数组。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-16T06:02:20.000Z"}],["meta",{"property":"article:author","content":"Liz"}],["meta",{"property":"article:modified_time","content":"2024-10-16T06:02:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"树\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-16T06:02:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Liz\\",\\"url\\":\\"https://github.com/liz-starfield\\"}]}"]]},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":2,"title":"二叉树","slug":"二叉树","link":"#二叉树","children":[{"level":3,"title":"二叉树的存储：链表与数组","slug":"二叉树的存储-链表与数组","link":"#二叉树的存储-链表与数组","children":[]},{"level":3,"title":"完全二叉树","slug":"完全二叉树","link":"#完全二叉树","children":[]},{"level":3,"title":"二叉树的遍历：前序遍历、中序遍历、后序遍历、层次遍历（递归与非递归）","slug":"二叉树的遍历-前序遍历、中序遍历、后序遍历、层次遍历-递归与非递归","link":"#二叉树的遍历-前序遍历、中序遍历、后序遍历、层次遍历-递归与非递归","children":[]},{"level":3,"title":"二叉查找树（二叉搜索树，二叉排序树）","slug":"二叉查找树-二叉搜索树-二叉排序树","link":"#二叉查找树-二叉搜索树-二叉排序树","children":[]},{"level":3,"title":"平衡二叉树","slug":"平衡二叉树","link":"#平衡二叉树","children":[]},{"level":3,"title":"哈夫曼树（又称，最优二叉树）","slug":"哈夫曼树-又称-最优二叉树","link":"#哈夫曼树-又称-最优二叉树","children":[]}]},{"level":2,"title":"多叉树","slug":"多叉树","link":"#多叉树","children":[{"level":3,"title":"B树","slug":"b树","link":"#b树","children":[]},{"level":3,"title":"B+树","slug":"b-树","link":"#b-树","children":[]}]},{"level":2,"title":"树状数组（Fenwick Tree / Binary Indexed Tree）","slug":"树状数组-fenwick-tree-binary-indexed-tree","link":"#树状数组-fenwick-tree-binary-indexed-tree","children":[]},{"level":2,"title":"线段树（Segment Tree）","slug":"线段树-segment-tree","link":"#线段树-segment-tree","children":[]},{"level":2,"title":"CSDN","slug":"csdn","link":"#csdn","children":[]}],"git":{"createdTime":1729058540000,"updatedTime":1729058540000,"contributors":[{"name":"unknown","email":"15721607377@163.com","commits":1}]},"readingTime":{"minutes":43.88,"words":13165},"filePathRelative":"posts/code/data_structure/6.树.md","localizedDate":"October 16, 2024","excerpt":"<h1> 树</h1>\\n<h2> 概念</h2>\\n<p>高度、深度、层 <br>\\n <br>\\n <br></p>\\n<h2> 二叉树</h2>\\n<h3> 二叉树的存储：链表与数组</h3>\\n<p>顺序存储法： 一般情况下，为了方便计算子节点，根节点会存储在下标为 1 的位置。如果节点 X 存储在数组中下标为 i 的位置，下标为 2 * i 的位置存储的就是左子节点，下标为 2 * i + 1 的位置存储的就是右子节点。反过来，下标为 i/2 的位置存储就是它的父节点。  <br></p>\\n<h3> 完全二叉树</h3>\\n<p>满二叉树是完全二叉树的一种特殊情况 <br>\\n如果某棵二叉树是一棵完全二叉树，那用数组存储无疑是最节省内存的一种方式。   <br>\\n这也是为什么完全二叉树会单独拎出来的原因，也是为什么完全二叉树要求最后一层的子节点都靠左的原因。   <br>\\n当我们讲到堆和堆排序的时候，你会发现，堆其实就是一种完全二叉树，最常用的存储方式就是数组。   <br></p>","autoDesc":true}');export{e as data};
