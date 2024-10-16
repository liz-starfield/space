const E=JSON.parse('{"key":"v-44fdf740","path":"/zh/posts/code/%E7%BB%8F%E5%85%B8%E9%A2%98%E6%B1%87%E6%80%BB%EF%BC%88%E6%AF%8F%E4%B8%AA%E7%BB%86%E5%88%86%E7%B1%BB%E9%99%90%E5%AE%9A10%E9%A2%98%E4%BB%A5%E5%86%85%EF%BC%89.html","title":"经典题汇总（每个细分类限定10题以内）","lang":"zh-CN","frontmatter":{"icon":"lightbulb","description":"经典题汇总（每个细分类限定10题以内） %代表做不出来的次数 &amp;代表做出来的次数 经典题汇总（每个细分类限定10题以内） 数组 双指针&amp;滑动窗口 链表 树 线段树 !图 DFS 回溯（切记：将新生成的curList放入res时，要创建新的list，即res.add(new ArrayList(curList))，不然就会被改掉） 并查集（并查集能做的题，也可以用DFS或BFS做，我选择用DFS来做） BFS（如果图是矩阵，往上下左右4个方向移动，最好用for循环实现，而不是写4次相似的代码） 拓扑排序 !栈&amp;单调栈 队列 堆 哈希表 模拟/枚举 递归 排序 二分查找(细节很难把握，多练) 动态规划（贪心：能用贪心求解的一定能用动态规划） 贪心&amp;区间集合 字符串 数学 快速幂 众数（摩尔投票法） 位运算","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://liz-starfield.github.io/blog/posts/code/%E7%BB%8F%E5%85%B8%E9%A2%98%E6%B1%87%E6%80%BB%EF%BC%88%E6%AF%8F%E4%B8%AA%E7%BB%86%E5%88%86%E7%B1%BB%E9%99%90%E5%AE%9A10%E9%A2%98%E4%BB%A5%E5%86%85%EF%BC%89.html"}],["meta",{"property":"og:url","content":"https://liz-starfield.github.io/blog/zh/posts/code/%E7%BB%8F%E5%85%B8%E9%A2%98%E6%B1%87%E6%80%BB%EF%BC%88%E6%AF%8F%E4%B8%AA%E7%BB%86%E5%88%86%E7%B1%BB%E9%99%90%E5%AE%9A10%E9%A2%98%E4%BB%A5%E5%86%85%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"莉芝"}],["meta",{"property":"og:title","content":"经典题汇总（每个细分类限定10题以内）"}],["meta",{"property":"og:description","content":"经典题汇总（每个细分类限定10题以内） %代表做不出来的次数 &amp;代表做出来的次数 经典题汇总（每个细分类限定10题以内） 数组 双指针&amp;滑动窗口 链表 树 线段树 !图 DFS 回溯（切记：将新生成的curList放入res时，要创建新的list，即res.add(new ArrayList(curList))，不然就会被改掉） 并查集（并查集能做的题，也可以用DFS或BFS做，我选择用DFS来做） BFS（如果图是矩阵，往上下左右4个方向移动，最好用for循环实现，而不是写4次相似的代码） 拓扑排序 !栈&amp;单调栈 队列 堆 哈希表 模拟/枚举 递归 排序 二分查找(细节很难把握，多练) 动态规划（贪心：能用贪心求解的一定能用动态规划） 贪心&amp;区间集合 字符串 数学 快速幂 众数（摩尔投票法） 位运算"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-16T06:02:20.000Z"}],["meta",{"property":"article:author","content":"Liz"}],["meta",{"property":"article:modified_time","content":"2024-10-16T06:02:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"经典题汇总（每个细分类限定10题以内）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-16T06:02:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Liz\\",\\"url\\":\\"https://github.com/liz-starfield\\"}]}"]]},"headers":[{"level":2,"title":"线段树","slug":"线段树","link":"#线段树","children":[]},{"level":2,"title":"DFS","slug":"dfs","link":"#dfs","children":[{"level":3,"title":"回溯（切记：将新生成的curList放入res时，要创建新的list，即res.add(new ArrayList(curList))，不然就会被改掉）","slug":"回溯-切记-将新生成的curlist放入res时-要创建新的list-即res-add-new-arraylist-curlist-不然就会被改掉","link":"#回溯-切记-将新生成的curlist放入res时-要创建新的list-即res-add-new-arraylist-curlist-不然就会被改掉","children":[]},{"level":3,"title":"并查集（并查集能做的题，也可以用DFS或BFS做，我选择用DFS来做）","slug":"并查集-并查集能做的题-也可以用dfs或bfs做-我选择用dfs来做","link":"#并查集-并查集能做的题-也可以用dfs或bfs做-我选择用dfs来做","children":[]}]},{"level":2,"title":"BFS（如果图是矩阵，往上下左右4个方向移动，最好用for循环实现，而不是写4次相似的代码）","slug":"bfs-如果图是矩阵-往上下左右4个方向移动-最好用for循环实现-而不是写4次相似的代码","link":"#bfs-如果图是矩阵-往上下左右4个方向移动-最好用for循环实现-而不是写4次相似的代码","children":[]},{"level":2,"title":"拓扑排序","slug":"拓扑排序","link":"#拓扑排序","children":[]},{"level":2,"title":"快速幂","slug":"快速幂","link":"#快速幂","children":[]},{"level":2,"title":"众数（摩尔投票法）","slug":"众数-摩尔投票法","link":"#众数-摩尔投票法","children":[]}],"git":{"createdTime":1729058540000,"updatedTime":1729058540000,"contributors":[{"name":"unknown","email":"15721607377@163.com","commits":1}]},"readingTime":{"minutes":10.76,"words":3228},"filePathRelative":"zh/posts/code/经典题汇总（每个细分类限定10题以内）.md","localizedDate":"2024年10月16日","excerpt":"<h1> 经典题汇总（每个细分类限定10题以内）</h1>\\n<p>%代表做不出来的次数<br>\\n&amp;代表做出来的次数</p>\\n<ul>\\n<li><a href=\\"#%E7%BB%8F%E5%85%B8%E9%A2%98%E6%B1%87%E6%80%BB%E6%AF%8F%E4%B8%AA%E7%BB%86%E5%88%86%E7%B1%BB%E9%99%90%E5%AE%9A10%E9%A2%98%E4%BB%A5%E5%86%85\\">经典题汇总（每个细分类限定10题以内）</a></li>\\n<li><a href=\\"#%E6%95%B0%E7%BB%84\\">数组</a></li>\\n<li><a href=\\"#%E5%8F%8C%E6%8C%87%E9%92%88%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3\\">双指针&amp;滑动窗口</a></li>\\n<li><a href=\\"#%E9%93%BE%E8%A1%A8\\">链表</a></li>\\n<li><a href=\\"#%E6%A0%91\\">树</a>\\n<ul>\\n<li><a href=\\"#%E7%BA%BF%E6%AE%B5%E6%A0%91\\">线段树</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E5%9B%BE\\">!图</a>\\n<ul>\\n<li><a href=\\"#dfs\\">DFS</a>\\n<ul>\\n<li><a href=\\"#%E5%9B%9E%E6%BA%AF%E5%88%87%E8%AE%B0%E5%B0%86%E6%96%B0%E7%94%9F%E6%88%90%E7%9A%84curlist%E6%94%BE%E5%85%A5res%E6%97%B6%E8%A6%81%E5%88%9B%E5%BB%BA%E6%96%B0%E7%9A%84list%E5%8D%B3resaddnew-arraylistcurlist%E4%B8%8D%E7%84%B6%E5%B0%B1%E4%BC%9A%E8%A2%AB%E6%94%B9%E6%8E%89\\">回溯（切记：将新生成的curList放入res时，要创建新的list，即res.add(new ArrayList(curList))，不然就会被改掉）</a></li>\\n<li><a href=\\"#%E5%B9%B6%E6%9F%A5%E9%9B%86%E5%B9%B6%E6%9F%A5%E9%9B%86%E8%83%BD%E5%81%9A%E7%9A%84%E9%A2%98%E4%B9%9F%E5%8F%AF%E4%BB%A5%E7%94%A8dfs%E6%88%96bfs%E5%81%9A%E6%88%91%E9%80%89%E6%8B%A9%E7%94%A8dfs%E6%9D%A5%E5%81%9A\\">并查集（并查集能做的题，也可以用DFS或BFS做，我选择用DFS来做）</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#bfs%E5%A6%82%E6%9E%9C%E5%9B%BE%E6%98%AF%E7%9F%A9%E9%98%B5%E5%BE%80%E4%B8%8A%E4%B8%8B%E5%B7%A6%E5%8F%B34%E4%B8%AA%E6%96%B9%E5%90%91%E7%A7%BB%E5%8A%A8%E6%9C%80%E5%A5%BD%E7%94%A8for%E5%BE%AA%E7%8E%AF%E5%AE%9E%E7%8E%B0%E8%80%8C%E4%B8%8D%E6%98%AF%E5%86%994%E6%AC%A1%E7%9B%B8%E4%BC%BC%E7%9A%84%E4%BB%A3%E7%A0%81\\">BFS（如果图是矩阵，往上下左右4个方向移动，最好用for循环实现，而不是写4次相似的代码）</a></li>\\n<li><a href=\\"#%E6%8B%93%E6%89%91%E6%8E%92%E5%BA%8F\\">拓扑排序</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E6%A0%88%E5%8D%95%E8%B0%83%E6%A0%88\\">!栈&amp;单调栈</a></li>\\n<li><a href=\\"#%E9%98%9F%E5%88%97\\">队列</a></li>\\n<li><a href=\\"#%E5%A0%86\\">堆</a></li>\\n<li><a href=\\"#%E5%93%88%E5%B8%8C%E8%A1%A8\\">哈希表</a></li>\\n<li><a href=\\"#%E6%A8%A1%E6%8B%9F%E6%9E%9A%E4%B8%BE\\">模拟/枚举</a></li>\\n<li><a href=\\"#%E9%80%92%E5%BD%92\\">递归</a></li>\\n<li><a href=\\"#%E6%8E%92%E5%BA%8F\\">排序</a></li>\\n<li><a href=\\"#%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E7%BB%86%E8%8A%82%E5%BE%88%E9%9A%BE%E6%8A%8A%E6%8F%A1%E5%A4%9A%E7%BB%83\\">二分查找(细节很难把握，多练)</a></li>\\n<li><a href=\\"#%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E8%B4%AA%E5%BF%83%E8%83%BD%E7%94%A8%E8%B4%AA%E5%BF%83%E6%B1%82%E8%A7%A3%E7%9A%84%E4%B8%80%E5%AE%9A%E8%83%BD%E7%94%A8%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92\\">动态规划（贪心：能用贪心求解的一定能用动态规划）</a></li>\\n<li><a href=\\"#%E8%B4%AA%E5%BF%83%E5%8C%BA%E9%97%B4%E9%9B%86%E5%90%88\\">贪心&amp;区间集合</a></li>\\n<li><a href=\\"#%E5%AD%97%E7%AC%A6%E4%B8%B2\\">字符串</a></li>\\n<li><a href=\\"#%E6%95%B0%E5%AD%A6\\">数学</a>\\n<ul>\\n<li><a href=\\"#%E5%BF%AB%E9%80%9F%E5%B9%82\\">快速幂</a></li>\\n<li><a href=\\"#%E4%BC%97%E6%95%B0%E6%91%A9%E5%B0%94%E6%8A%95%E7%A5%A8%E6%B3%95\\">众数（摩尔投票法）</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E4%BD%8D%E8%BF%90%E7%AE%97\\">位运算</a></li>\\n</ul>","autoDesc":true}');export{E as data};
