import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as l,f as t,e}from"./app-YkV2VZ8k.js";const n={},r=e('<h1 id="challenges-in-the-commercialization-of-large-language-models" tabindex="-1"><a class="header-anchor" href="#challenges-in-the-commercialization-of-large-language-models" aria-hidden="true">#</a> Challenges in the Commercialization of Large Language Models</h1><ul><li><ol><li>Current Solutions for Rapid Commercial Deployment: RAG</li></ol></li><li><ol start="2"><li>Challenges in the Commercialization of LLM</li></ol></li><li><ol start="3"><li>Generation and Retrieval</li></ol></li><li><ol start="4"><li>Use Case: Implementation of an Intelligent Customer Service System</li></ol></li></ul>',2),o=e('<h2 id="_1-current-solutions-for-rapid-commercial-deployment-rag" tabindex="-1"><a class="header-anchor" href="#_1-current-solutions-for-rapid-commercial-deployment-rag" aria-hidden="true">#</a> 1. Current Solutions for Rapid Commercial Deployment: RAG</h2><ul><li>RAG (Retrieval-Augmented Generation)</li><li>RAG is a practical approach for achieving rapid commercialization at the current stage</li><li>It enables quick integration of existing business data into the LLM domain</li></ul><h2 id="_2-challenges-in-the-commercialization-of-llm" tabindex="-1"><a class="header-anchor" href="#_2-challenges-in-the-commercialization-of-llm" aria-hidden="true">#</a> 2. Challenges in the Commercialization of LLM</h2><h3 id="_2-1-performance" tabindex="-1"><a class="header-anchor" href="#_2-1-performance" aria-hidden="true">#</a> 2.1. Performance</h3><ul><li>The requirements differ between B2B and B2C <ul><li>B2B: Enterprises have high expectations for performance and accuracy</li><li>B2C: Generally lower expectations with a higher tolerance for errors, as users are more forgiving</li></ul></li></ul><h3 id="_2-2-controllable-generation" tabindex="-1"><a class="header-anchor" href="#_2-2-controllable-generation" aria-hidden="true">#</a> 2.2. Controllable Generation</h3><ul><li>LLMs generate content with a certain level of freedom, which means the output is not always as intended</li><li>Implementing controls or constraints can help guide model output to align with desired outcomes</li></ul><h4 id="_2-3-privacy" tabindex="-1"><a class="header-anchor" href="#_2-3-privacy" aria-hidden="true">#</a> 2.3. Privacy</h4><ul><li>Models like GPT-4 can potentially extract user privacy information through guided prompts</li></ul><h4 id="_2-4-hallucination" tabindex="-1"><a class="header-anchor" href="#_2-4-hallucination" aria-hidden="true">#</a> 2.4. Hallucination</h4><ul><li>Models sometimes generate plausible-sounding but inaccurate information (&quot;hallucinations&quot;, /həˈluː.sɪ.neɪt/) <ul><li>Makes statements that sound plausible but are not true</li><li>Generate fictitious information such as invalid URLs or non-existent numbers</li></ul></li><li>How to reduce hallucinations <ul><li>First find relevant information, then answer the question based on the relevant information.</li></ul></li><li>Question: Can relying solely on the provided context completely resolve the hallucination problem in models? <ul><li>It cannot completely resolve it, but it can significantly reduce hallucinations</li><li>Reasons it cannot be fully resolved: <ul><li>Retrieval accuracy</li><li>LLM comprehension capabilities</li><li>Complexity of the question</li></ul></li></ul></li></ul><h2 id="_3-generation-and-retrieval" tabindex="-1"><a class="header-anchor" href="#_3-generation-and-retrieval" aria-hidden="true">#</a> 3. Generation and Retrieval</h2><h3 id="_3-1-generation" tabindex="-1"><a class="header-anchor" href="#_3-1-generation" aria-hidden="true">#</a> 3.1. Generation</h3><ul><li>Pros: Content diversity and creativity</li><li>Cons: Lack of control over the generated content</li></ul><h3 id="_3-2-retrieval" tabindex="-1"><a class="header-anchor" href="#_3-2-retrieval" aria-hidden="true">#</a> 3.2. Retrieval</h3><ul><li>Pros: Provides controlled and reliable output</li><li>Cons: Limited by the boundaries of available content</li></ul><h3 id="_3-3-combining-generation-and-retrieval-rag" tabindex="-1"><a class="header-anchor" href="#_3-3-combining-generation-and-retrieval-rag" aria-hidden="true">#</a> 3.3. Combining Generation and Retrieval: RAG</h3><ul><li>RAG, or Retrieval-Augmented Generation, combines retrieval to support and enhance generation</li><li>It brings together the strengths of both generation and retrieval</li></ul><h2 id="_4-use-case-implementation-of-an-intelligent-customer-service-system" tabindex="-1"><a class="header-anchor" href="#_4-use-case-implementation-of-an-intelligent-customer-service-system" aria-hidden="true">#</a> 4. Use Case: Implementation of an Intelligent Customer Service System</h2><h3 id="_4-1-retrieval-based-approach" tabindex="-1"><a class="header-anchor" href="#_4-1-retrieval-based-approach" aria-hidden="true">#</a> 4.1. Retrieval-Based Approach</h3><ul><li><ol><li>Build a set of frequently asked question pairs (FAQ, i.e., &lt;Q, A&gt;)</li></ol></li><li><ol start="2"><li>Retrieve related questions based on the user’s query</li></ol></li><li><ol start="3"><li>Provide the answer to the most relevant question as the result</li></ol></li></ul><p>Characteristics:</p><ul><li>Requires the construction of a Q&amp;A dataset</li><li>Provides accurate and reliable answers</li></ul><h3 id="_4-2-generation-based-approach" tabindex="-1"><a class="header-anchor" href="#_4-2-generation-based-approach" aria-hidden="true">#</a> 4.2. Generation-Based Approach</h3><ul><li><ol><li>Build a set of Q&amp;A pairs</li></ol></li><li><ol start="2"><li>Train the model on this Q&amp;A dataset</li></ol></li><li><ol start="3"><li>The model generates an answer based on the user’s query</li></ol></li></ul><p>Characteristics:</p><ul><li>Requires constructing a Q&amp;A dataset</li><li>The generated responses are less reliable and harder to control</li></ul><h3 id="_4-3-combined-retrieval-and-generation-approach" tabindex="-1"><a class="header-anchor" href="#_4-3-combined-retrieval-and-generation-approach" aria-hidden="true">#</a> 4.3. Combined Retrieval and Generation Approach</h3><ul><li><ol><li>Build a knowledge base (not necessarily in Q&amp;A format)</li></ol></li><li><ol start="2"><li>User inputs a question</li></ol></li><li><ol start="3"><li>Retrieve relevant information from the knowledge base as candidates</li></ol></li><li><ol start="4"><li>Input the user’s question, the candidate information, and previous conversation history into a prompt</li></ol></li><li><ol start="5"><li>Feed the prompt into the large language model (LLM), which generates the final response</li></ol></li></ul><p>Characteristics:</p><ul><li>No need to organize data into a Q&amp;A format</li><li>The LLM&#39;s generated response is based on information retrieved from the knowledge base, leading to more reliable results</li></ul>',31);function s(h,d){return a(),l("div",null,[r,t(" more "),o])}const m=i(n,[["render",s],["__file","009_llm_challenge.html.vue"]]);export{m as default};
