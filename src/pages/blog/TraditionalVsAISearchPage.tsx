import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { ArrowLeft, Clock, Share2, Copy, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const TraditionalVsAISearchPage = () => {
  const post = {
    id: "traditional-vs-ai-search",
    title: "An analysis of how brands and products are being percieved by the new content consumer - AI",
    excerpt: "Exploring emerging trends and technologies shaping the next decade of enterprise digital transformation.",
    content: `<h1>AI Search is Rewriting the Web: From Keywords to Contextual Intelligence</h1>

                  <p>For decades, search engines operated on a simple principle: match the words in your query to the words in a document. From Boolean logic to algorithms like TF-IDF (Term Frequency-Inverse Document Frequency) and Google's game-changing PageRank, the early web thrived on keyword optimization. But traditional keyword search, no matter how refined, has fundamental blind spots. It can't discern user intent, handle synonyms effectively, or understand context. When someone searches for "Apple," does that mean the fruit or the tech company?</p>

                  <p>Enter AI search — a new paradigm powered by large language models (LLMs), vector databases, and retrieval-augmented generation (RAG). This shift isn't just changing how we get answers. It's transforming how content is created, optimized, and consumed across the internet.</p>

                  <h2>Traditional Search</h2>
                  <p>Back in the day, search engines were pretty simple because they were based more or less just on keyword search. They matched words in a user's query to words in documents, often leading to results that were easily manipulated or lacked true relevance. Through techniques such as boolean keyword matching, the engine would return results on exact or close matches.</p>

                  <p>Keyword search has moved on since then. Google's breakthrough in the late 1990s called PageRank added link analysis to judge a page's authority, introducing a sophisticated method for evaluating the authority of web pages.</p>

                  <p>The underlying principle of PageRank was akin to a voting system, where a link from one page to another was considered a "vote" of confidence. Critically, not all votes were created equal. A link from a highly reputable and well-established website carried significantly more weight than a link from a less authoritative or obscure site.</p>

                  <p>PageRank fundamentally shifted the paradigm of web search by prioritizing perceived authority and trustworthiness. It not only improved the accuracy and relevance of search results but also made the web a more navigable and reliable source of information. Its introduction was a pivotal moment in the evolution of the internet, laying the groundwork for Google's dominance in the search engine market and profoundly influencing how users interact with online content.</p>

                  <p>But traditional keyword search has some clear limitations. It can't truly understand context and synonyms and user intent. So when my search string includes the word "Apple," am I referring to the fruit or the tech company?</p>

                  <h2>AI Search</h2>
                  <p>Enter machine learning and the world of AI search. Technologies like BERT from Google in 2019 introduced a transformer-based language model into search, helping better understand the context of natural language queries. That was followed two years later by MUM (Multitask Unified Model), a much more powerful model than BERT to both understand and generate language. And then today, we have large language models where the AI generates an answer rather than just retrieving links.</p>

                  <h3>Natural Language Query Processing</h3>
                  <p>First, we've got the natural language that's coming in. Specifically, we're gonna perform natural language query processing. So when a user asks a question in plain language, the system uses an LLM to interpret the query. That uses the LLM's Natural Language Understanding capabilities (NLU) to parse the query's intent and nuances.</p>

                  <h3>Semantic Retrieval</h3>
                  <p>With intent established, we move to the next stage, which is retrieval. Instead of relying solely on keyword matching, although that does still play a part, AI search often uses vectors. Specifically, it uses vector search to find relevant documents semantically. Text—both search queries and documents—are encoded into numerical vectors, called embeddings. Vectors capture semantic meaning. The user's query vector is matched with document vectors in a vector database to find conceptually related content.</p>

                  <h3>Answer Generation</h3>
                  <p>The next stage is answer generation. After retrieval, relevant snippets (not entire documents) are provided to an LLM, which generates a cohesive answer in natural language using those sources of information. This is retrieval-augmented generation (RAG), where the LLM's knowledge is augmented with up-to-date retrieved data. By grounding its answer in retrieved facts, the AI search system can provide current and accurate information. The generated answer can include citations linking back to original sources—a level of transparency that helps gain user trust and confirms the answer is not just hallucinated.</p>

                  <h3>Feedback Loop</h3>
                  <p>The final stage is feedback. Many AI search implementations learn from feedback to improve. Users might give a thumbs up or thumbs down, or the system observes follow-up queries to figure out if the answer was helpful. This data can fine-tune the LLM and the retrieval component over time.</p>

                  <h2>Traditional vs. AI Search: A Side-by-Side Comparison</h2>
                  <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                      <tr style="background-color: #f5f5f5;"><th style="border: 1px solid #ddd; padding: 8px;">Capability</th><th style="border: 1px solid #ddd; padding: 8px;">Traditional Search</th><th style="border: 1px solid #ddd; padding: 8px;">AI Search</th></tr>
                      <tr><td style="border: 1px solid #ddd; padding: 8px;">Response Format</td><td style="border: 1px solid #ddd; padding: 8px;">List of links for the user to click</td><td style="border: 1px solid #ddd; padding: 8px;">Direct, generated answer to the query</td></tr>
                      <tr><td style="border: 1px solid #ddd; padding: 8px;">Query Understanding</td><td style="border: 1px solid #ddd; padding: 8px;">Primarily keyword-based</td><td style="border: 1px solid #ddd; padding: 8px;">Based on Natural Language Understanding (NLU)</td></tr>
                      <tr><td style="border: 1px solid #ddd; padding: 8px;">Context Handling</td><td style="border: 1px solid #ddd; padding: 8px;">Limited memory, independent interactions</td><td style="border: 1px solid #ddd; padding: 8px;">Maintains context, allows multi-turn conversations</td></tr>
                      <tr><td style="border: 1px solid #ddd; padding: 8px;">Information Synthesis</td><td style="border: 1px solid #ddd; padding: 8px;">Separate, fragmented sources</td><td style="border: 1px solid #ddd; padding: 8px;">Combined into a unified answer</td></tr>
                  </table>

                  <h2>SEO in the Age of AI Search</h2>
                  <p>As AI-driven search begins to reshape how content is discovered and consumed, SEO experts are adjusting their strategies to stay ahead. Donna Bedford, Global SEO Lead at Lenovo, offers a pragmatic view: brands don't need to start from scratch, but they do need to evolve.</p>

                  <p>According to Bedford, the foundations of traditional SEO—structured content, strong navigation, and clarity—remain critical. However, she emphasizes the importance of adapting for both human readers and machines.</p>

                  <p>She stresses the shift from keyword-stuffed copy to natural, conversational phrasing that mimics how users might actually ask a question. This dual focus—"think human, think machine"—is essential for visibility in AI-generated results.</p>

                  <p>Bedford also references Google's EEAT framework—Experience, Expertise, Authority, and Trust—as a guiding principle. Content should demonstrate credibility, depth, and a comprehensive understanding of the subject matter to signal that it's a trustworthy source for generative models.</p>

                  <p>While traditional elements like H1 tags and headers still matter, she warns that certain technical choices—such as over-reliance on JavaScript—can impair visibility in AI-driven search. Unlike traditional crawlers, many AI models struggle with dynamically rendered content, making it critical to ensure accessibility and clarity.</p>

                  <h2>AI Search and the LemonHQ Perspective</h2>
                  <p>At LemonHQ, we help enterprise brands track, monitor and measure their brand mentions in AI-powered search results, helping them understand how their brand is being viewed and interpreted by AI models in the real world. Through our Pilot Emerging Tech services, we:</p>
                  <ul>
                      <li>Run sandbox experiments with LLMs and RAG pipelines</li>
                      <li>Prototype semantic search tools on internal data</li>
                      <li>Help brands adapt their content strategy to the age of generative answers</li>
                  </ul>

                  <p>Whether you're exploring conversational AI, AI copilots, or transforming your knowledge base into a smart assistant, AI search is the backbone of this evolution. We make sure your business is not just indexed, but understood.</p>

                  <h2>Final Thoughts</h2>
                  <p>AI search is redefining how users find, trust, and interact with information. As traditional SEO morphs into AI content visibility, the imperative is clear: adapt your data, structure your content, and prepare for a world where answers replace links.</p>

                  <p>If you're building the next generation of digital experiences, LemonHQ is here to pilot it with you.<br>
                  <a href="https://lemonhq.co.uk/contact" target="_blank">Talk to our team today → lemonhq.co.uk/contact</a></p>
    `,
    featuredImage: "/assets/imgs/ordering-food.jpg",
    date: "2024-01-15",
    publishDate: "2024-01-15",
    readTime: 5,
    category: "AI",
    tags: ["AI Search", "SEO", "Strategy", "Innovation"],
    author: {
      name: "Mohammed Naheemuddin",
      avatar: "/assets/imgs/abdul-profile.jpg",
      role: "Digital Media Lead"
    }
  };

  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <MainLayout pageTitle={post.title}>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link 
              to="/blog-1"
              className="inline-flex items-center text-primary hover:text-primary/80 mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>

            {/* Article header */}
            <div className="mb-8">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-foreground">{post.author.name}</div>
                    <div className="text-sm">{post.author.role}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-sm">
                  <span>{formattedDate}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>

            {/* Featured image */}
            <div className="mb-8">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Article content */}
            <div className="prose prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>

            {/* Share buttons */}
            <Card className="mb-12">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Share2 className="h-5 w-5 mr-2" />
                    <span className="font-medium">Share this article</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleCopyLink}>
                      <Copy className="h-4 w-4 mr-1" />
                      Copy Link
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare('facebook')}>
                      <Facebook className="h-4 w-4 mr-1" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare('twitter')}>
                      <Twitter className="h-4 w-4 mr-1" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare('linkedin')}>
                      <Linkedin className="h-4 w-4 mr-1" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TraditionalVsAISearchPage;