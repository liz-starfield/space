const a=JSON.parse('{"key":"v-3e231f51","path":"/posts/java/%E9%9B%86%E5%90%88.html","title":"集合","lang":"en-US","frontmatter":{"icon":"lightbulb","description":"集合 集合 二、集合 （一）Comparator与Comparable实现自定义类排序 （二）List (对付顺序的好帮⼿) 、Set (注重独⼀⽆⼆的性质) 、Map (⽤Key来搜索的专家) （三）ArrayList（底层是Object数组）、LinkedList（底层是双向链表）与Vector（保证线程安全，而ArrayList与LinkedList不保证线程安全） （四）HashMap、Hashtable、HashSet、ConcurrentHashMap、LinkedHashMap、TreeMap （1）HashMap（⾮线程安全） （2）HashTable（线程安全，是全表锁，性能差， 基本被淘汰） （3）HashSet（底层就是基于HashMap实现的，检查重复时，先用hashcode()，后用equals()） （4）ConcurrentHashMap （5）LinkedHashMap （6）TreeMap： 红⿊树(⾃平衡的排序⼆叉树) （五）CopyOnWriteArrayList避免并发修改异常 （六）把集合包装成线程安全的","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://liz-starfield.github.io/blog/zh/posts/java/%E9%9B%86%E5%90%88.html"}],["meta",{"property":"og:url","content":"https://liz-starfield.github.io/blog/posts/java/%E9%9B%86%E5%90%88.html"}],["meta",{"property":"og:site_name","content":"Liz"}],["meta",{"property":"og:title","content":"集合"}],["meta",{"property":"og:description","content":"集合 集合 二、集合 （一）Comparator与Comparable实现自定义类排序 （二）List (对付顺序的好帮⼿) 、Set (注重独⼀⽆⼆的性质) 、Map (⽤Key来搜索的专家) （三）ArrayList（底层是Object数组）、LinkedList（底层是双向链表）与Vector（保证线程安全，而ArrayList与LinkedList不保证线程安全） （四）HashMap、Hashtable、HashSet、ConcurrentHashMap、LinkedHashMap、TreeMap （1）HashMap（⾮线程安全） （2）HashTable（线程安全，是全表锁，性能差， 基本被淘汰） （3）HashSet（底层就是基于HashMap实现的，检查重复时，先用hashcode()，后用equals()） （4）ConcurrentHashMap （5）LinkedHashMap （6）TreeMap： 红⿊树(⾃平衡的排序⼆叉树) （五）CopyOnWriteArrayList避免并发修改异常 （六）把集合包装成线程安全的"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-16T06:02:20.000Z"}],["meta",{"property":"article:author","content":"Liz"}],["meta",{"property":"article:modified_time","content":"2024-10-16T06:02:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集合\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-16T06:02:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Liz\\",\\"url\\":\\"https://github.com/liz-starfield\\"}]}"]]},"headers":[{"level":2,"title":"（一）Comparator与Comparable实现自定义类排序","slug":"一-comparator与comparable实现自定义类排序","link":"#一-comparator与comparable实现自定义类排序","children":[]},{"level":2,"title":"（二）List (对付顺序的好帮⼿)  、Set (注重独⼀⽆⼆的性质)  、Map (⽤Key来搜索的专家)","slug":"二-list-对付顺序的好帮手-、set-注重独一无二的性质-、map-用key来搜索的专家","link":"#二-list-对付顺序的好帮手-、set-注重独一无二的性质-、map-用key来搜索的专家","children":[]},{"level":2,"title":"（三）ArrayList（底层是Object数组）、LinkedList（底层是双向链表）与Vector（保证线程安全，而ArrayList与LinkedList不保证线程安全）","slug":"三-arraylist-底层是object数组-、linkedlist-底层是双向链表-与vector-保证线程安全-而arraylist与linkedlist不保证线程安全","link":"#三-arraylist-底层是object数组-、linkedlist-底层是双向链表-与vector-保证线程安全-而arraylist与linkedlist不保证线程安全","children":[]},{"level":2,"title":"（四）HashMap、Hashtable、HashSet、ConcurrentHashMap、LinkedHashMap、TreeMap","slug":"四-hashmap、hashtable、hashset、concurrenthashmap、linkedhashmap、treemap","link":"#四-hashmap、hashtable、hashset、concurrenthashmap、linkedhashmap、treemap","children":[{"level":3,"title":"（1）HashMap（⾮线程安全）","slug":"_1-hashmap-非线程安全","link":"#_1-hashmap-非线程安全","children":[]},{"level":3,"title":"（2）HashTable（线程安全，是全表锁，性能差， 基本被淘汰）","slug":"_2-hashtable-线程安全-是全表锁-性能差-基本被淘汰","link":"#_2-hashtable-线程安全-是全表锁-性能差-基本被淘汰","children":[]},{"level":3,"title":"（3）HashSet（底层就是基于HashMap实现的，检查重复时，先用hashcode()，后用equals()）","slug":"_3-hashset-底层就是基于hashmap实现的-检查重复时-先用hashcode-后用equals","link":"#_3-hashset-底层就是基于hashmap实现的-检查重复时-先用hashcode-后用equals","children":[]},{"level":3,"title":"（4）ConcurrentHashMap","slug":"_4-concurrenthashmap","link":"#_4-concurrenthashmap","children":[]},{"level":3,"title":"（5）LinkedHashMap","slug":"_5-linkedhashmap","link":"#_5-linkedhashmap","children":[]},{"level":3,"title":"（6）TreeMap： 红⿊树(⾃平衡的排序⼆叉树)","slug":"_6-treemap-红黑树-自平衡的排序二叉树","link":"#_6-treemap-红黑树-自平衡的排序二叉树","children":[]}]},{"level":2,"title":"（五）CopyOnWriteArrayList避免并发修改异常","slug":"五-copyonwritearraylist避免并发修改异常","link":"#五-copyonwritearraylist避免并发修改异常","children":[]},{"level":2,"title":"（六）把集合包装成线程安全的","slug":"六-把集合包装成线程安全的","link":"#六-把集合包装成线程安全的","children":[]}],"git":{"createdTime":1729058540000,"updatedTime":1729058540000,"contributors":[{"name":"unknown","email":"15721607377@163.com","commits":1}]},"readingTime":{"minutes":6.51,"words":1952},"filePathRelative":"posts/java/集合.md","localizedDate":"October 16, 2024","excerpt":"<h1> 集合</h1>\\n<ul>\\n<li><a href=\\"#%E9%9B%86%E5%90%88\\">集合</a></li>\\n<li><a href=\\"#%E4%BA%8C%E9%9B%86%E5%90%88\\">二、集合</a>\\n<ul>\\n<li><a href=\\"#%E4%B8%80comparator%E4%B8%8Ecomparable%E5%AE%9E%E7%8E%B0%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E6%8E%92%E5%BA%8F\\">（一）Comparator与Comparable实现自定义类排序</a></li>\\n<li><a href=\\"#%E4%BA%8Clist-%E5%AF%B9%E4%BB%98%E9%A1%BA%E5%BA%8F%E7%9A%84%E5%A5%BD%E5%B8%AE--set-%E6%B3%A8%E9%87%8D%E7%8B%AC%E7%9A%84%E6%80%A7%E8%B4%A8--map-key%E6%9D%A5%E6%90%9C%E7%B4%A2%E7%9A%84%E4%B8%93%E5%AE%B6\\">（二）List (对付顺序的好帮⼿)  、Set (注重独⼀⽆⼆的性质)  、Map (⽤Key来搜索的专家)</a></li>\\n<li><a href=\\"#%E4%B8%89arraylist%E5%BA%95%E5%B1%82%E6%98%AFobject%E6%95%B0%E7%BB%84linkedlist%E5%BA%95%E5%B1%82%E6%98%AF%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8%E4%B8%8Evector%E4%BF%9D%E8%AF%81%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E8%80%8Carraylist%E4%B8%8Elinkedlist%E4%B8%8D%E4%BF%9D%E8%AF%81%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8\\">（三）ArrayList（底层是Object数组）、LinkedList（底层是双向链表）与Vector（保证线程安全，而ArrayList与LinkedList不保证线程安全）</a></li>\\n<li><a href=\\"#%E5%9B%9Bhashmaphashtablehashsetconcurrenthashmaplinkedhashmaptreemap\\">（四）HashMap、Hashtable、HashSet、ConcurrentHashMap、LinkedHashMap、TreeMap</a>\\n<ul>\\n<li><a href=\\"#1hashmap%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8\\">（1）HashMap（⾮线程安全）</a></li>\\n<li><a href=\\"#2hashtable%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E6%98%AF%E5%85%A8%E8%A1%A8%E9%94%81%E6%80%A7%E8%83%BD%E5%B7%AE-%E5%9F%BA%E6%9C%AC%E8%A2%AB%E6%B7%98%E6%B1%B0\\">（2）HashTable（线程安全，是全表锁，性能差， 基本被淘汰）</a></li>\\n<li><a href=\\"#3hashset%E5%BA%95%E5%B1%82%E5%B0%B1%E6%98%AF%E5%9F%BA%E4%BA%8Ehashmap%E5%AE%9E%E7%8E%B0%E7%9A%84%E6%A3%80%E6%9F%A5%E9%87%8D%E5%A4%8D%E6%97%B6%E5%85%88%E7%94%A8hashcode%E5%90%8E%E7%94%A8equals\\">（3）HashSet（底层就是基于HashMap实现的，检查重复时，先用hashcode()，后用equals()）</a></li>\\n<li><a href=\\"#4concurrenthashmap\\">（4）ConcurrentHashMap</a></li>\\n<li><a href=\\"#5linkedhashmap\\">（5）LinkedHashMap</a></li>\\n<li><a href=\\"#6treemap-%E7%BA%A2%E6%A0%91%E5%B9%B3%E8%A1%A1%E7%9A%84%E6%8E%92%E5%BA%8F%E5%8F%89%E6%A0%91\\">（6）TreeMap： 红⿊树(⾃平衡的排序⼆叉树)</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E4%BA%94copyonwritearraylist%E9%81%BF%E5%85%8D%E5%B9%B6%E5%8F%91%E4%BF%AE%E6%94%B9%E5%BC%82%E5%B8%B8\\">（五）CopyOnWriteArrayList避免并发修改异常</a></li>\\n<li><a href=\\"#%E5%85%AD%E6%8A%8A%E9%9B%86%E5%90%88%E5%8C%85%E8%A3%85%E6%88%90%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E7%9A%84\\">（六）把集合包装成线程安全的</a></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{a as data};
