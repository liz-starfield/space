const e=JSON.parse('{"key":"v-7c18e3be","path":"/posts/code/algorithm/5.%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92_%E8%B4%AA%E5%BF%83.html","title":"动态规划与贪心","lang":"en-US","frontmatter":{"icon":"lightbulb","description":"动态规划与贪心 动态规划适合用来求解最优问题，比如求最大值、最小值等。 动态规划基础步骤 1.建立dp数组（确定是一维、二维还是多维，也可后续进行变更。从小往大考虑，1维能不能表示出来，1维不行的话，考虑2维） 2.根据题意，描述dp数组每一个格的含义 3.已知dp[i][j]能推出哪些格，或者通过哪些格能推出dp[i][j]，推导动态转移矩阵 4.根据dp[i][j]能推导出的位置，确定往dp数组填入内容的顺序（是从上到下，从左到右，从左下角到右上角，还是从左上角到右下角） 5.初始化dp数组 6.循环填满dp数组 7.根据需要从dp数组获取对应信息","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://liz-starfield.github.io/blog/zh/posts/code/algorithm/5.%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92_%E8%B4%AA%E5%BF%83.html"}],["meta",{"property":"og:url","content":"https://liz-starfield.github.io/blog/posts/code/algorithm/5.%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92_%E8%B4%AA%E5%BF%83.html"}],["meta",{"property":"og:site_name","content":"Liz"}],["meta",{"property":"og:title","content":"动态规划与贪心"}],["meta",{"property":"og:description","content":"动态规划与贪心 动态规划适合用来求解最优问题，比如求最大值、最小值等。 动态规划基础步骤 1.建立dp数组（确定是一维、二维还是多维，也可后续进行变更。从小往大考虑，1维能不能表示出来，1维不行的话，考虑2维） 2.根据题意，描述dp数组每一个格的含义 3.已知dp[i][j]能推出哪些格，或者通过哪些格能推出dp[i][j]，推导动态转移矩阵 4.根据dp[i][j]能推导出的位置，确定往dp数组填入内容的顺序（是从上到下，从左到右，从左下角到右上角，还是从左上角到右下角） 5.初始化dp数组 6.循环填满dp数组 7.根据需要从dp数组获取对应信息"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-16T06:02:20.000Z"}],["meta",{"property":"article:author","content":"Liz"}],["meta",{"property":"article:modified_time","content":"2024-10-16T06:02:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"动态规划与贪心\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-16T06:02:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Liz\\",\\"url\\":\\"https://github.com/liz-starfield\\"}]}"]]},"headers":[{"level":2,"title":"动态规划基础步骤","slug":"动态规划基础步骤","link":"#动态规划基础步骤","children":[]},{"level":2,"title":"背包DP（约束规划）","slug":"背包dp-约束规划","link":"#背包dp-约束规划","children":[]},{"level":2,"title":"线性DP（线性规划）","slug":"线性dp-线性规划","link":"#线性dp-线性规划","children":[]},{"level":2,"title":"区间DP（区间规划）","slug":"区间dp-区间规划","link":"#区间dp-区间规划","children":[]},{"level":2,"title":"DP进阶","slug":"dp进阶","link":"#dp进阶","children":[{"level":3,"title":"DAG上的DP","slug":"dag上的dp","link":"#dag上的dp","children":[]},{"level":3,"title":"树形DP","slug":"树形dp","link":"#树形dp","children":[]},{"level":3,"title":"状态压缩DP","slug":"状态压缩dp","link":"#状态压缩dp","children":[]},{"level":3,"title":"概率DP","slug":"概率dp","link":"#概率dp","children":[]},{"level":3,"title":"DP优化","slug":"dp优化","link":"#dp优化","children":[]}]},{"level":2,"title":"Acwing笔记","slug":"acwing笔记","link":"#acwing笔记","children":[]},{"level":2,"title":"CSDN","slug":"csdn","link":"#csdn","children":[]},{"level":2,"title":"贪心","slug":"贪心","link":"#贪心","children":[]}],"git":{"createdTime":1729058540000,"updatedTime":1729058540000,"contributors":[{"name":"unknown","email":"15721607377@163.com","commits":1}]},"readingTime":{"minutes":6.38,"words":1913},"filePathRelative":"posts/code/algorithm/5.动态规划&贪心.md","localizedDate":"October 16, 2024","excerpt":"<h1> 动态规划与贪心</h1>\\n<p>动态规划适合用来求解最优问题，比如求最大值、最小值等。 <br></p>\\n<h2> 动态规划基础步骤</h2>\\n<p> <br>\\n1.建立dp数组（确定是一维、二维还是多维，也可后续进行变更。从小往大考虑，1维能不能表示出来，1维不行的话，考虑2维） <br>\\n2.根据题意，描述dp数组每一个格的含义 <br>\\n3.已知dp[i][j]能推出哪些格，或者通过哪些格能推出dp[i][j]，推导动态转移矩阵 <br>\\n4.根据dp[i][j]能推导出的位置，确定往dp数组填入内容的顺序（是从上到下，从左到右，从左下角到右上角，还是从左上角到右下角） <br>\\n5.初始化dp数组 <br>\\n6.循环填满dp数组 <br>\\n7.根据需要从dp数组获取对应信息 <br></p>","autoDesc":true}');export{e as data};
