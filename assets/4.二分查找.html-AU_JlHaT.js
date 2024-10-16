import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e as p}from"./app-NUkfrIsv.js";const t="/blog/assets/4.二分查找-1-ql9UVwh9.png",o="/blog/assets/4.二分查找-2-sSWUSzos.png",e="/blog/assets/4.二分查找-3-FCRFekpY.png",l="/blog/assets/4.二分查找-4-3EQYUbJo.png",r="/blog/assets/4.二分查找-5--IuRLwkH.png",c={},i=p('<h1 id="二分查找" tabindex="-1"><a class="header-anchor" href="#二分查找" aria-hidden="true">#</a> 二分查找</h1><h2 id="对数列的要求" tabindex="-1"><a class="header-anchor" href="#对数列的要求" aria-hidden="true">#</a> 对数列的要求</h2><ol><li>有序的（排好序的，无序的需要提前排序） <br></li><li>存在上下界（限定数量或区间范围。否则需要对不定长的边界做处理，来找到明确上下界） <br></li><li>能够通过索引访问其中的元素（数组适合，链表非常不适合） <br></li><li>不常变动的，不要求动态增删的情形下查找（否则，应采用AVL树，即自平衡的二叉查找树） <br></li><li>数据量不能超级大（针对实际应用，要考虑内存限制） <br></li></ol><p>数据量太大就不适合二分查找了。 <br> 二分查找的底层需要依赖数组这种数据结构，而数组为了支持随机访问的特性，要求内存空 间连续，对内存的要求比较苛刻。比如，我们有 1GB 大小的数据，如果希望用数组来存 储，那就需要 1GB 的连续内存空间。 <br> 注意这里的“连续”二字，也就是说，即便有 2GB 的内存空间剩余，但是如果这剩余的 2GB 内存空间都是零散的，没有连续的 1GB 大小的内存空间，那照样无法申请一个 1GB 大小的数组。而我们的二分查找是作用在数组这种数据结构之上的，所以太大的数据用数组 存储就比较吃力了，也就不能用二分查找了。 <br></p><h2 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h2><p>时间复杂度是 O(logN) <br> 若要求对数组进行动态地删除和插入操作并完成查找，平均复杂度会变为O(N) <br><img src="'+t+'" alt="image.png" loading="lazy"> <br></p><h2 id="不定长的边界的处理" tabindex="-1"><a class="header-anchor" href="#不定长的边界的处理" aria-hidden="true">#</a> 不定长的边界的处理</h2><p>背景 <br><img src="'+o+'" alt="image.png" loading="lazy"> <br> 处理 <br><img src="'+e+'" alt="image.png" loading="lazy"> <br></p><h2 id="while-left-right-和while-left-right" tabindex="-1"><a class="header-anchor" href="#while-left-right-和while-left-right" aria-hidden="true">#</a> while(left &lt;= right)和while(left &lt; right)</h2><p>在二分搜索算法中，while(left &lt;= right)和while(left &lt; right)两种条件都是有实际应用场景的，它们各自对应不同的二分搜索变体。</p><p>while(left &lt;= right):</p><p>这种条件通常用在我们需要找到目标值的确切位置时。 循环会继续执行，直到left和right重叠，这意味着我们检查了每一个可能的位置。 如果数组中有目标值，这个条件可以保证找到；如果没有，最终left会停在目标值应该插入的位置。<br> while(left &lt; right):</p><p>这种条件用在当我们需要找到满足某个条件的最左侧或最右侧的边界时，例如&quot;第一个大于等于目标值的位置&quot;或者&quot;最后一个小于等于目标值的位置&quot;。 这种情况下，循环结束时left和right不会重叠，循环结束后，通常还需要一些额外的判断来确定答案。</p><h2 id="分类-前提-有序数据集合中不存在重复的数据" tabindex="-1"><a class="header-anchor" href="#分类-前提-有序数据集合中不存在重复的数据" aria-hidden="true">#</a> 分类（前提：有序数据集合中不存在重复的数据）</h2><h3 id="整数二分" tabindex="-1"><a class="header-anchor" href="#整数二分" aria-hidden="true">#</a> 整数二分</h3><p>用i来做边界，不能取到l；用j来做边界，不能取到r。 <br></p><h4 id="递归实现" tabindex="-1"><a class="header-anchor" href="#递归实现" aria-hidden="true">#</a> 递归实现</h4><p>优点是简洁 <br> 缺点是执行消耗大 <br><img src="'+l+`" alt="image.png" loading="lazy"> <br></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>int binarySearch<span class="token punctuation">(</span>int<span class="token punctuation">[</span><span class="token punctuation">]</span> nums, int target, int low, int high<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
		if<span class="token punctuation">(</span>low <span class="token operator">&gt;</span> high<span class="token punctuation">)</span> <span class="token builtin class-name">return</span> -1<span class="token punctuation">;</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
    int middle <span class="token operator">=</span> low + <span class="token punctuation">(</span>high - low<span class="token punctuation">)</span> / <span class="token number">2</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
    if<span class="token punctuation">(</span>nums<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
      <span class="token builtin class-name">return</span> middle<span class="token punctuation">;</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
    <span class="token punctuation">}</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
    if<span class="token punctuation">(</span>target <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>middle<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
      <span class="token builtin class-name">return</span> binarySearch<span class="token punctuation">(</span>nums, target, low, middle-1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
      <span class="token builtin class-name">return</span> binarySearch<span class="token punctuation">(</span>nums, target, middle+1, high<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
    <span class="token punctuation">}</span>    <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
<span class="token punctuation">}</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="迭代实现" tabindex="-1"><a class="header-anchor" href="#迭代实现" aria-hidden="true">#</a> 迭代实现</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>int binarySearch<span class="token punctuation">(</span>int<span class="token punctuation">[</span><span class="token punctuation">]</span> nums, int target, int low, int high<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
	while<span class="token punctuation">(</span>low <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
     int middle <span class="token operator">=</span> low + <span class="token punctuation">(</span>high - low<span class="token punctuation">)</span> / <span class="token number">2</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
     if<span class="token punctuation">(</span>nums<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
       <span class="token builtin class-name">return</span> middle<span class="token punctuation">;</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
     <span class="token punctuation">}</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
     if<span class="token punctuation">(</span>target <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>middle<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
       high <span class="token operator">=</span> middle - <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
       low <span class="token operator">=</span> middle + <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
     <span class="token punctuation">}</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
  <span class="token builtin class-name">return</span> -1<span class="token punctuation">;</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
<span class="token punctuation">}</span> <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="浮点数二分" tabindex="-1"><a class="header-anchor" href="#浮点数二分" aria-hidden="true">#</a> 浮点数二分</h3><p>如果结果是保留5位小数，那么while(r-l&gt;1e-7)；如果结果是保留6位小数，那么while(r-l&gt;1e-8)；差2位 <br> 或者直接循环100次 <br></p><h2 id="二分查找变体-前提-有序数据集合中存在重复的数据" tabindex="-1"><a class="header-anchor" href="#二分查找变体-前提-有序数据集合中存在重复的数据" aria-hidden="true">#</a> 二分查找变体（前提：有序数据集合中存在重复的数据）</h2><p>变体的二分查找算法写起来非常烧脑，很容易因为细节处理不好而产生 Bug，这些容易出 错的细节有：终止条件、区间上下界更新方法、返回值选择。 <br></p><h3 id="查找第一个值等于给定值的元素" tabindex="-1"><a class="header-anchor" href="#查找第一个值等于给定值的元素" aria-hidden="true">#</a> 查找第一个值等于给定值的元素</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">bsearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">int</span> high <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> low <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>high <span class="token operator">-</span> low<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
            high <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
            low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>mid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!=</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> mid<span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token keyword">else</span> high <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找最后一个值等于给定值的元素" tabindex="-1"><a class="header-anchor" href="#查找最后一个值等于给定值的元素" aria-hidden="true">#</a> 查找最后一个值等于给定值的元素</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">bsearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">int</span> high <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> low <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>high <span class="token operator">-</span> low<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
            high <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
            low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>mid <span class="token operator">==</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!=</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> mid<span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token keyword">else</span> low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找第一个大于等于给定值的元素" tabindex="-1"><a class="header-anchor" href="#查找第一个大于等于给定值的元素" aria-hidden="true">#</a> 查找第一个大于等于给定值的元素</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">bsearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">int</span> high <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> low <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>high <span class="token operator">-</span> low<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>mid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> mid<span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token keyword">else</span> high <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
            low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找最后一个小于等于给定值的元素" tabindex="-1"><a class="header-anchor" href="#查找最后一个小于等于给定值的元素" aria-hidden="true">#</a> 查找最后一个小于等于给定值的元素</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">bsearch7</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">int</span> high <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> low <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>high <span class="token operator">-</span> low<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
            high <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>mid <span class="token operator">==</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> mid<span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token keyword">else</span> low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="应用-如何快速定位出一个-ip-地址的归属地" tabindex="-1"><a class="header-anchor" href="#应用-如何快速定位出一个-ip-地址的归属地" aria-hidden="true">#</a> 应用：如何快速定位出一个 IP 地址的归属地？</h4><p>在庞大的地址库中逐一比对 IP 地址所在的区间，是非常耗时的。假设我们有 12 万条这样的 IP 区间与归属地的对应关系，如何快速定位出一个 IP 地址的归属地呢？ <br><img src="`+r+'" alt="image.png" loading="lazy"> <br> 将起始地址按照对应的整型值的大小关系， 从小到大进行排序。 当我们要查询某个 IP 归属地时，我们可以先通过二分查找，找到最后一个起始 IP 小于等于 这个 IP 的 IP 区间，然后，检查这个 IP 是否在这个 IP 区间内，如果在，我们就取出对应的归属地显示；如果不在，就返回未查找到。 <br></p>',35),k=[i];function u(d,b){return n(),a("div",null,k)}const g=s(c,[["render",u],["__file","4.二分查找.html.vue"]]);export{g as default};
