const e=JSON.parse('{"key":"v-1d06f544","path":"/zh/posts/code/algorithm/1.%E5%88%86%E6%B2%BB%E6%80%9D%E6%83%B3_%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.html","title":"分治思想与递归实现","lang":"zh-CN","frontmatter":{"icon":"lightbulb","description":"分治思想与递归实现 算法的两种实现方式 正如数据结构中，所有的数据结构都由数组或链表实现。 Note：数据结构的底层存储只有数组和链表两种 数组：栈、队列、堆、树、图(邻接矩阵) 链表：栈、队列、堆、树、图(邻接表) 在算法中，所有的算法都由迭代或递归实现。 迭代：可以实现所有算法，所有的递归都可转换为迭代。动态规划可以看做是通过迭代实现分治思想的别称。 递归：分治思想的算法，也就是有子问题的算法，除了动态规划是自底向上通过迭代实现，其他的算法都是自顶向下，都可用递归实现","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://liz-starfield.github.io/blog/posts/code/algorithm/1.%E5%88%86%E6%B2%BB%E6%80%9D%E6%83%B3_%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.html"}],["meta",{"property":"og:url","content":"https://liz-starfield.github.io/blog/zh/posts/code/algorithm/1.%E5%88%86%E6%B2%BB%E6%80%9D%E6%83%B3_%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.html"}],["meta",{"property":"og:site_name","content":"莉芝"}],["meta",{"property":"og:title","content":"分治思想与递归实现"}],["meta",{"property":"og:description","content":"分治思想与递归实现 算法的两种实现方式 正如数据结构中，所有的数据结构都由数组或链表实现。 Note：数据结构的底层存储只有数组和链表两种 数组：栈、队列、堆、树、图(邻接矩阵) 链表：栈、队列、堆、树、图(邻接表) 在算法中，所有的算法都由迭代或递归实现。 迭代：可以实现所有算法，所有的递归都可转换为迭代。动态规划可以看做是通过迭代实现分治思想的别称。 递归：分治思想的算法，也就是有子问题的算法，除了动态规划是自底向上通过迭代实现，其他的算法都是自顶向下，都可用递归实现"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-16T06:02:20.000Z"}],["meta",{"property":"article:author","content":"Liz"}],["meta",{"property":"article:modified_time","content":"2024-10-16T06:02:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分治思想与递归实现\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-16T06:02:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Liz\\",\\"url\\":\\"https://github.com/liz-starfield\\"}]}"]]},"headers":[{"level":2,"title":"算法的两种实现方式","slug":"算法的两种实现方式","link":"#算法的两种实现方式","children":[{"level":3,"title":"递归（自顶向下）","slug":"递归-自顶向下","link":"#递归-自顶向下","children":[]},{"level":3,"title":"迭代（自底向上）","slug":"迭代-自底向上","link":"#迭代-自底向上","children":[]}]},{"level":2,"title":"分治思想（有子问题的算法）","slug":"分治思想-有子问题的算法","link":"#分治思想-有子问题的算法","children":[]},{"level":2,"title":"分治思想的两种实现方式","slug":"分治思想的两种实现方式","link":"#分治思想的两种实现方式","children":[{"level":3,"title":"递归（自顶向下）","slug":"递归-自顶向下-1","link":"#递归-自顶向下-1","children":[]},{"level":3,"title":"动态规划（自底向上，属于迭代）","slug":"动态规划-自底向上-属于迭代","link":"#动态规划-自底向上-属于迭代","children":[]}]}],"git":{"createdTime":1729058540000,"updatedTime":1729058540000,"contributors":[{"name":"unknown","email":"15721607377@163.com","commits":1}]},"readingTime":{"minutes":12.53,"words":3760},"filePathRelative":"zh/posts/code/algorithm/1.分治思想&递归实现.md","localizedDate":"2024年10月16日","excerpt":"<h1> 分治思想与递归实现</h1>\\n<h2> 算法的两种实现方式</h2>\\n<p>正如数据结构中，所有的数据结构都由数组或链表实现。 <br>\\nNote：数据结构的底层存储只有数组和链表两种 <br>\\n数组：栈、队列、堆、树、图(邻接矩阵) <br>\\n链表：栈、队列、堆、树、图(邻接表) <br></p>\\n<p>在算法中，所有的算法都由迭代或递归实现。 <br>\\n迭代：可以实现所有算法，所有的递归都可转换为迭代。动态规划可以看做是通过迭代实现分治思想的别称。 <br>\\n递归：分治思想的算法，也就是有子问题的算法，除了动态规划是自底向上通过迭代实现，其他的算法都是自顶向下，都可用递归实现 <br></p>","autoDesc":true}');export{e as data};
