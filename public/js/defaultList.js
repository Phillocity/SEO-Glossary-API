"use strict";
const defaultTerms = [
    {
        _id: "6311f752034582cf927553a4",
        term: "10 blue links",
        description: "The format search engines used to display search results; ten organic results all appearing in the same format.",
    },
    {
        _id: "6311f752034582cf927553a5",
        term: "10x content",
        description: "Content that is at least ten times better than the current top-ranking result for the target keyword.",
    },
    {
        _id: "6311f752034582cf927553a6",
        term: "2xx status codes",
        description: "A class of status codes that indicate the request for a page has succeeded.",
    },
    {
        _id: "6311f752034582cf927553a7",
        term: "301 redirect",
        description: "The 301 redirect that takes users to a new URL and tells search engines that the page has moved permanently.",
    },
    {
        _id: "6311f752034582cf927553a8",
        term: "302 redirect",
        description: "The 302 redirect indicates that the web page or resource was moved from one location to another temporarily.",
    },
    {
        _id: "6311f752034582cf927553a9",
        term: "304 not modified",
        description: "The 304 Not Modified is one of the redirection HTTP response codes from a server indicating that the resource has not been modified and there is no need to retransmit it since the client still has a cached copy of a resource.",
    },
    {
        _id: "6311f752034582cf927553aa",
        term: "404 response code",
        description: "The 404 Not Found HTTP status code indicates that the server couldn’t find the requested page or resource.",
    },
    {
        _id: "6311f752034582cf927553ab",
        term: "410 gone",
        description: "The 410 Gone HTTP status code indicates that the requested resource is no longer available on the server and that this condition is likely to be permanent.",
    },
    {
        _id: "6311f752034582cf927553ac",
        term: "4xx status codes",
        description: "A class of status codes that indicate the request for a page resulted in error.",
    },
    {
        _id: "6311f752034582cf927553ad",
        term: "5xx status codes",
        description: "A class of status codes that indicate the server’s inability to perform the request.",
    },
    {
        _id: "6311f752034582cf927553ae",
        term: "accelerated mobile pages (amp)",
        description: "Created by Google, Accelerated Mobile Pages (AMP) is a HTML framework for creating stripped-down, fast-loading web page versions optimized for mobile.",
    },
    {
        _id: "6311f752034582cf927553af",
        term: "advanced search operators",
        description: "Special characters and commands you can type into the search bar to further specify your query.",
    },
    {
        _id: "6311f752034582cf927553b0",
        term: "algorithms",
        description: "A process or formula by which stored information is retrieved and ordered in meaningful ways.",
    },
    {
        _id: "6311f752034582cf927553b1",
        term: "alt text",
        description: "Alt text (alternative text) is the text description of an image on a web page. It's used by screen readers and search engines.",
    },
    {
        _id: "6311f752034582cf927553b2",
        term: "ambiguous intent",
        description: "Refers to a search phrase where the goal of the searcher is unclear and requires further specification.",
    },
    {
        _id: "6311f752034582cf927553b3",
        term: "amp",
        description: "Often described as 'diet HTML,' accelerated mobile pages (AMP) are designed to make the viewing experience lightning fast for mobile visitors.",
    },
    {
        _id: "6311f752034582cf927553b4",
        term: "amplification",
        description: "Sharing or spreading the word about your brand; often used in the context of social media, paid advertisements, and influencer marketing.",
    },
    {
        _id: "6311f752034582cf927553b5",
        term: "anchor text",
        description: "Anchor text is the visible clickable text of a hyperlink. Google uses anchor texts to better understand the content of the linked page.",
    },
    {
        _id: "6311f752034582cf927553b6",
        term: "api",
        description: "An application programming interface (API) allows for the creation of applications by accessing the features or data of another service like an operating system or application.",
    },
    {
        _id: "6311f752034582cf927553b7",
        term: "article spinning",
        description: "Article spinning, aka content spinning, is where you take a piece of content and rewrite it to create many 'new' pieces of content. Article spinning can be done manually or using an automated software.",
    },
    {
        _id: "6311f752034582cf927553b8",
        term: "article syndication",
        description: "Article syndication is when one or more third-party sites republish an exact copy of content that originally appeared elsewhere.",
    },
    {
        _id: "6311f752034582cf927553b9",
        term: "async",
        description: "Short for 'asynchronous,' async means that the browser doesn’t have to wait for a task to finish before moving onto the next one while assembling your web page.",
    },
    {
        _id: "6311f752034582cf927553ba",
        term: "auto-generated content",
        description: "Auto-generated content is content that's automatically generated using a program or code.",
    },
    {
        _id: "6311f752034582cf927553bb",
        term: "backlinks",
        description: "Backlinks are links from a page on one website to another. Search engines analyze the quality of a backlink to estimate how important a page is.",
    },
    {
        _id: "6311f752034582cf927553bc",
        term: "bing webmaster tools",
        description: "Bing Webmaster Tools is a free service from Microsoft that helps you monitor and troubleshoot your website’s appearance in Bing’s search results.",
    },
    {
        _id: "6311f752034582cf927553bd",
        term: "bingbot",
        description: "Bingbot is the web crawler used by Microsoft to gather the information needed and build a searchable index of the web.",
    },
    {
        _id: "6311f752034582cf927553be",
        term: "black hat",
        description: "Search engine optimization practices that violate Google’s quality guidelines.",
    },
    {
        _id: "6311f752034582cf927553bf",
        term: "black-hat seo",
        description: "Black-hat SEO refers to the use of strategies, techniques, and tactics that violate a search engine's guidelines. It focuses on finding and exploiting algorithmic loopholes.",
    },
    {
        _id: "6311f752034582cf927553c0",
        term: "bots",
        description: "Also known as 'crawlers' or 'spiders,' these are what scour the Internet to find content.",
    },
    {
        _id: "6311f752034582cf927553c1",
        term: "bounce rate",
        description: "The percentage of total visits that did not result in a secondary action on your site. For example, if someone visited your home page and then left before viewing any other pages, that would be a bounced session.",
    },
    {
        _id: "6311f752034582cf927553c2",
        term: "branded keywords",
        description: "Branded keywords are the words and phrases that are associated with your brand, products, or services.",
    },
    {
        _id: "6311f752034582cf927553c3",
        term: "breadcrumb navigation",
        description: "Breadcrumb navigation are internal links that give users and search engines a clear trail to follow around your site.",
    },
    {
        _id: "6311f752034582cf927553c4",
        term: "bridge page",
        description: "A bridge page is a page solely designed to send users elsewhere. It is used by affiliate marketers to send traffic to an affiliate link.",
    },
    {
        _id: "6311f752034582cf927553c5",
        term: "broken link",
        description: "A broken link is a link on your site that points to a non-existent (or",
    },
    {
        _id: "6311f752034582cf927553c6",
        term: "browser",
        description: "A web browser, like Chrome or Firefox, is software that allows you to access information on the web. When you make a request in your browser (ex 'google.com'), you’re instructing your browser to retrieve the resources necessary to render that page on your device.",
    },
    {
        _id: "6311f752034582cf927553c7",
        term: "bundling",
        description: "To combine multiple resources into a single resource.",
    },
    {
        _id: "6311f752034582cf927553c8",
        term: "cached page",
        description: "A cached page is a version of a web page that has been saved by Google on their servers the last time they visited it.",
    },
    {
        _id: "6311f752034582cf927553c9",
        term: "caching",
        description: "A saved version of your web page.",
    },
    {
        _id: "6311f752034582cf927553ca",
        term: "caffeine",
        description: "Google’s web indexing system. Caffeine is the index, or collection of web content, whereas Googlebot is the crawler that goes out and finds the content.",
    },
    {
        _id: "6311f752034582cf927553cb",
        term: "canonical tag",
        description: "A canonical tag (rel='canonical') is a snippet of HTML code that defines the main version for duplicate, near-duplicate and similar pages.",
    },
    {
        _id: "6311f752034582cf927553cc",
        term: "canonical url",
        description: "A canonical URL is a URL that Google sees as the 'master' version of a set of duplicate or near-duplicate pages.",
    },
    {
        _id: "6311f752034582cf927553cd",
        term: "cctld",
        description: "Short for 'country code top level domain,' ccTLD refers to domains associated with countries. For example, .ru is the recognized ccTLD for Russia.",
    },
    {
        _id: "6311f752034582cf927553ce",
        term: "channel",
        description: "The different vehicles by which you can get attention and acquire traffic, such as organic search and social media.",
    },
    {
        _id: "6311f752034582cf927553cf",
        term: "chapter 2",
        description: "How Search Engines Work – Crawling, Indexing, and Ranking",
    },
    {
        _id: "6311f752034582cf927553d0",
        term: "chapter 3",
        description: "Keyword Research",
    },
    {
        _id: "6311f752034582cf927553d1",
        term: "chapter 4",
        description: "On-Site Optimization",
    },
    {
        _id: "6311f752034582cf927553d2",
        term: "chapter 5",
        description: "Technical Optimization",
    },
    {
        _id: "6311f752034582cf927553d3",
        term: "chapter 6",
        description: "Link Building & Establishing Authority",
    },
    {
        _id: "6311f752034582cf927553d4",
        term: "chapter 7",
        description: "Measuring, Prioritizing, & Executing SEO",
    },
    {
        _id: "6311f752034582cf927553d5",
        term: "citations",
        description: "Also known as a 'business listing,' a citation is a web-based reference to a local business' name, address, and phone number (NAP).",
    },
    {
        _id: "6311f752034582cf927553d6",
        term: "click-through rate",
        description: "The ratio of impressions to clicks on your URLs.",
    },
    {
        _id: "6311f752034582cf927553d7",
        term: "client-side & server-side rendering",
        description: "Client-side and server-side rendering refer to where the code runs. Client-side means the file is executed in the browser. Server-side means the files are executed at the server and the server sends them to the browser in their fully rendered state.",
    },
    {
        _id: "6311f752034582cf927553d8",
        term: "cloaking",
        description: "Showing different content to search engines than you show to human visitors.",
    },
    {
        _id: "6311f752034582cf927553d9",
        term: "co-citation",
        description: "Co-citation occurs when two documents are cited together by other documents",
    },
    {
        _id: "6311f752034582cf927553da",
        term: "commercial investigation queries",
        description: "A query in which the searcher wants to compare products to find the one that best suits them.",
    },
    {
        _id: "6311f752034582cf927553db",
        term: "computer-generated content",
        description: "Content created by software that is supposedly on par with what a human can create.",
    },
    {
        _id: "6311f752034582cf927553dc",
        term: "content delivery network (cdn)",
        description: "Globally distributed server network that makes it quicker for users to access your website.",
    },
    {
        _id: "6311f752034582cf927553dd",
        term: "content hub",
        description: "Interlinked collections of content about a similar topic.",
    },
    {
        _id: "6311f752034582cf927553de",
        term: "conversion rate",
        description: "The ratio of visits to conversions. Conversion rate answershow many of my website visitors are filling out my forms, calling, signing up for my newsletter, etc.?",
    },
    {
        _id: "6311f752034582cf927553df",
        term: "co-occurrence",
        description: "When keywords show up together on pages about a certain topic.",
    },
    {
        _id: "6311f752034582cf927553e0",
        term: "core web vitals",
        description: "Metrics that are part of Google’s Page Experience signals used to measure user experience.",
    },
    {
        _id: "6311f752034582cf927553e1",
        term: "cornerstone content",
        description: "Cornerstone content is the collection of articles on your website that you most want to rank for in search engines.",
    },
    {
        _id: "6311f752034582cf927553e2",
        term: "crawl budget",
        description: "The average number of pages a search engine bot will crawl on your site",
    },
    {
        _id: "6311f752034582cf927553e3",
        term: "crawlability",
        description: "A search engine’s ability to access content on apage.",
    },
    {
        _id: "6311f752034582cf927553e4",
        term: "crawler",
        description: "A crawler is an internet program designed to browse the internet systematically. Crawlers are most commonly used as a means for search engines to discover and process pages for indexing and showing them in the search results.",
    },
    {
        _id: "6311f752034582cf927553e5",
        term: "crawler directives",
        description: "Instructions to the crawler regarding what you want it to crawl and index on your site.",
    },
    {
        _id: "6311f752034582cf927553e6",
        term: "crawling",
        description: "The process by which search engines discover your web pages.",
    },
    {
        _id: "6311f752034582cf927553e7",
        term: "critical rendering path",
        description: "The sequence of steps a browser goes through to convert HTML, CSS and JavaScript into a viewable web page.",
    },
    {
        _id: "6311f752034582cf927553e8",
        term: "css",
        description: "A Cascading Style Sheet (CSS) is the code that makes a website look a certain way (ex fonts and colors).",
    },
    {
        _id: "6311f752034582cf927553e9",
        term: "da",
        description: "Domain Authority (DA) is a metric used to predict a domain’s ranking ability; best used as a comparative metric (ex comparing a website’s DA score to that of itsdirect competitors).",
    },
    {
        _id: "6311f752034582cf927553ea",
        term: "deindexed",
        description: "When a URL, section of URLs, or an entire domain has been removed from a search engine index. This can happen for a number of reasons, such as when a website receives a manual penalty for violatingGoogle’s quality guidelines.",
    },
    {
        _id: "6311f752034582cf927553eb",
        term: "de-indexed",
        description: "Refers to a page or group of pages being removed from Google’s index.",
    },
    {
        _id: "6311f752034582cf927553ec",
        term: "directory links",
        description: "Directory' in the context of local SEO is an aggregate list of local businesses, usually including each business’s name, address, phone number (NAP) and other information like their website. 'Directory' can also refer to a type of unnatural link that violates Google’s guidelines 'low-quality directory or bookmark site links.'",
    },
    {
        _id: "6311f752034582cf927553ed",
        term: "distance",
        description: "In the context of the local pack, distance refers to proximity, or the location of the searcher and/or the location specified in the query.",
    },
    {
        _id: "6311f752034582cf927553ee",
        term: "dns",
        description: "A Domain Name Server (DNS) allows domain names to be linked to IP addresses (ex '127.0.0.1'). DNS essentially translates domain names into IP addresses so that browsers can load the page’s resources.",
    },
    {
        _id: "6311f752034582cf927553ef",
        term: "dofollow link",
        description: "Link that transfers PageRank. AKA a 'followed' link.",
    },
    {
        _id: "6311f752034582cf927553f0",
        term: "dom",
        description: "The Document Object Model (DOM) is the structure of an HTML document — it defines how that document can be accessed and changed by things like JavaScript.",
    },
    {
        _id: "6311f752034582cf927553f1",
        term: "domain name registrar",
        description: "A company that manages the reservation of internet domain names. Example GoDaddy.",
    },
    {
        _id: "6311f752034582cf927553f2",
        term: "domain rating (dr)",
        description: "The relative strength of a website’s authority based on its backlink profile.",
    },
    {
        _id: "6311f752034582cf927553f3",
        term: "doorway page",
        description: "Pages designed to rank for similar search queries.",
    },
    {
        _id: "6311f752034582cf927553f4",
        term: "duplicate content",
        description: "Content that is shared between domains or between multiple pages of a single domain.",
    },
    {
        _id: "6311f752034582cf927553f5",
        term: "dwell time",
        description: "How much time passes between clicking one of the search results and heading back to them.",
    },
    {
        _id: "6311f752034582cf927553f6",
        term: "dynamic url",
        description: "URL with content that depends on variable parameters.",
    },
    {
        _id: "6311f752034582cf927553f7",
        term: "editorial link",
        description: "Link that points to your site (that you didn’t ask or payfor.)",
    },
    {
        _id: "6311f752034582cf927553f8",
        term: "editorial links",
        description: "When links are earned naturally and given out of an author’s own volition (rather than paid for or coerced), they are considered editorial.",
    },
    {
        _id: "6311f752034582cf927553f9",
        term: "email outreach",
        description: "The process of putting your product or content in front of relevant people by sending them personalized emails.",
    },
    {
        _id: "6311f752034582cf927553fa",
        term: "engagement",
        description: "Data that represents how searchers interact with your site from search results.",
    },
    {
        _id: "6311f752034582cf927553fb",
        term: "entry page",
        description: "The first page a searcher views on yoursite.",
    },
    {
        _id: "6311f752034582cf927553fc",
        term: "evergreen content",
        description: "Content that doesn’t go out ofdate.",
    },
    {
        _id: "6311f752034582cf927553fd",
        term: "external link",
        description: "Link from your site to another site.",
    },
    {
        _id: "6311f752034582cf927553fe",
        term: "faceted navigation",
        description: "Often used on e-commerce websites, faceted navigations offer a number of sorting and filtering options to help visitors more easily locate the URL they’re looking for out of a stack of thousands or even millions of URLs. For example, you could sort a clothing page by price low to high, or filter the page to view only size small.",
    },
    {
        _id: "6311f752034582cf927553ff",
        term: "featured snippets",
        description: "Organic answer boxes that appear at the top of SERPs for certain queries.",
    },
    {
        _id: "6311f752034582cf92755400",
        term: "fetch and render tool",
        description: "A tool available in Google Search Console that allows you to see a web page how Google sees it.",
    },
    {
        _id: "6311f752034582cf92755401",
        term: "file compression",
        description: "The process of encoding information using fewer bits; reducing the size of the file. There are many different compression techniques.",
    },
    {
        _id: "6311f752034582cf92755402",
        term: "follow",
        description: "The default state of a link, 'follow' links pass PageRank.",
    },
    {
        _id: "6311f752034582cf92755403",
        term: "gated content",
        description: "Content that visitors can only access after providing their contact information.",
    },
    {
        _id: "6311f752034582cf92755404",
        term: "gateway page",
        description: "A gateway page is a web page designed to rank for particular search queries without offering useful information or answering the user’s search query. When clicked from SERP, the page will redirect the visitor to a different page.",
    },
    {
        _id: "6311f752034582cf92755405",
        term: "geographic modifiers",
        description: "Terms that describe a physical location or service area. For example, 'pizza' is not geo-modified, but 'pizza in Seattle' is.",
    },
    {
        _id: "6311f752034582cf92755406",
        term: "google alerts",
        description: "Free service from Google that monitors the web for content changes matching a specific search query.",
    },
    {
        _id: "6311f752034582cf92755407",
        term: "google algorithm",
        description: "Set of rules used by Google to rank matching results when a user performs a search.",
    },
    {
        _id: "6311f752034582cf92755408",
        term: "google analytics",
        description: "A free (with an option to pay for upgraded features) tool that helps website owners get insight into how people are engaging with their website. Some examples of reports you can see in Google Analytics include acquisition reports that show what channels your visitors are coming from, and conversion reports that show the rate at which people are completing goals (ex form fills) on your website.",
    },
    {
        _id: "6311f752034582cf92755409",
        term: "google analytics goals",
        description: "What actions are you hoping people take on your website? Whatever your answer, you can set those up as goals in Google Analytics to track your conversion rate.",
    },
    {
        _id: "6311f752034582cf9275540a",
        term: "google autocomplete",
        description: "Search suggestions given by Google when entering a search.",
    },
    {
        _id: "6311f752034582cf9275540b",
        term: "google bombing",
        description: "Where you get a website to rank higher in Google for irrelevant or unrelated search queries using black-hat SEO tactics.",
    },
    {
        _id: "6311f752034582cf9275540c",
        term: "google business profile",
        description: "Free business listing from Google that shows up in maps and web search results.",
    },
    {
        _id: "6311f752034582cf9275540d",
        term: "google caffeine",
        description: "Search index introduced by Google in 2010 that allowed them to index more content and provide fresher search results.",
    },
    {
        _id: "6311f752034582cf9275540e",
        term: "google dance",
        description: "Slang term describing the volatility a new website or page experiences when Google is trying to determine where it should rank.",
    },
    {
        _id: "6311f752034582cf9275540f",
        term: "google hummingbird",
        description: "Algorithm update released by Google in 2013 to return better search results. It emphasized the meaning of search queries over individual keywords.",
    },
    {
        _id: "6311f752034582cf92755410",
        term: "google knowledge graph",
        description: "Knowledge base of entities and the relationships between them.",
    },
    {
        _id: "6311f752034582cf92755411",
        term: "google knowledge panel",
        description: "SERP feature that provides information about the main subject of thequery.",
    },
    {
        _id: "6311f752034582cf92755412",
        term: "google my business",
        description: "Free service from Google that allows business owners to create, manage, and optimize their Google Business Profile.",
    },
    {
        _id: "6311f752034582cf92755413",
        term: "google my business listing",
        description: "A free listing available to local businesses.",
    },
    {
        _id: "6311f752034582cf92755414",
        term: "google panda",
        description: "Google Panda is an algorithm update launched in an effort to filter out sites with lower-quality, thin content. Today, it’s part of Google’s core algorithm.",
    },
    {
        _id: "6311f752034582cf92755415",
        term: "google penalty",
        description: "A Google penalty is a punishment a human reviewer can impose on website for violating Google’s webmaster quality guidelines.",
    },
    {
        _id: "6311f752034582cf92755416",
        term: "google penguin",
        description: "Algorithm update released in 2012 by Google to downgrade sites that engaged in manipulative link schemesand keyword stuffing.",
    },
    {
        _id: "6311f752034582cf92755417",
        term: "google pigeon",
        description: "Algorithm update released in 2013 by Google to improve search results for local search queries.",
    },
    {
        _id: "6311f752034582cf92755418",
        term: "google quality guidelines",
        description: "Published guidelines from Google detailing tactics that are forbidden because they are malicious and/or intended to manipulate search results.",
    },
    {
        _id: "6311f752034582cf92755419",
        term: "google sandbox",
        description: "Alleged filter by Google that prevents new websites from ranking in Google’s top results.",
    },
    {
        _id: "6311f752034582cf9275541a",
        term: "google search console",
        description: "Free service from Google that helps you monitor and troubleshoot your website’s appearance in their search results.",
    },
    {
        _id: "6311f752034582cf9275541b",
        term: "google search operators",
        description: "Special text that can be appended to your query to further specify what types of results you’re looking for. For example, adding 'site' before a domain name can return a list of all (or many) indexed pages on said domain.",
    },
    {
        _id: "6311f752034582cf9275541c",
        term: "google tag manager",
        description: "A single hub for managing multiple website tracking codes.",
    },
    {
        _id: "6311f752034582cf9275541d",
        term: "google top heavy update",
        description: "Algorithm update released in 2012 by Google to downgrade web pages with too many ads at thetop.",
    },
    {
        _id: "6311f752034582cf9275541e",
        term: "google webmaster guidelines",
        description: "Best practices from Google to help them find, index, and rank yoursite.",
    },
    {
        _id: "6311f752034582cf9275541f",
        term: "google webmaster tools",
        description: "Google Webmaster Tools - now Google Search Console - is a free tool by Google that allows users to check how their website is performing in the search results and whether it experiences any issues that can affect that performance.",
    },
    {
        _id: "6311f752034582cf92755420",
        term: "googlebot",
        description: "Web crawler that powers Google’s search engine.",
    },
    {
        _id: "6311f752034582cf92755421",
        term: "googlebot / bingbot",
        description: "How major search engines like Google and Bing crawl the web; their 'crawlers' or 'spiders.'",
    },
    {
        _id: "6311f752034582cf92755422",
        term: "grey hat seo",
        description: "The use of SEO strategies and tactics that blur the line between white-hat and black-hat methods.",
    },
    {
        _id: "6311f752034582cf92755423",
        term: "guest blogging",
        description: "Often used as a link building strategy, guest blogging involves pitching an article (or idea for an article) to a publication in the hopes that they will feature your content and allow you to include a link back to your website. Just be careful though. Large-scale guest posting campaigns with keyword-rich anchor text links are a violation of Google’s quality guidelines.",
    },
    {
        _id: "6311f752034582cf92755424",
        term: "guestographic",
        description: "Infographic created by you but published on other websites.",
    },
    {
        _id: "6311f752034582cf92755425",
        term: "h1 tag",
        description: "HTML heading that’s most commonly used to mark up a web pagetitle.",
    },
    {
        _id: "6311f752034582cf92755426",
        term: "header tags",
        description: "Header tags are HTML tags used to set apart headings and subheadings from the rest of the content on a webpage, in descending order of importance from H1 to H6.",
    },
    {
        _id: "6311f752034582cf92755427",
        term: "hilltop algorithm",
        description: "Algorithm adopted by Google in 2003 to identify authoritative web pages torank.",
    },
    {
        _id: "6311f752034582cf92755428",
        term: "holistic seo",
        description: "The practice of improving all aspects of a website to rank higher in search engines.",
    },
    {
        _id: "6311f752034582cf92755429",
        term: "hreflang",
        description: "A tag that indicates to Google which language the content is in. This helps Google serve the appropriate language version of your page to people searching in that language.",
    },
    {
        _id: "6311f752034582cf9275542a",
        term: "html",
        description: "Hypertext markup language is the language used to create web pages.",
    },
    {
        _id: "6311f752034582cf9275542b",
        term: "http 200 response code",
        description: "The HTTP 200 (OK) is the status response code from a server for successful HTTP requests from a client.",
    },
    {
        _id: "6311f752034582cf9275542c",
        term: "https",
        description: "Encrypted version of HTTP that protects the communications between your browser and server from being intercepted and tampered with by attackers.",
    },
    {
        _id: "6311f752034582cf9275542d",
        term: "image carousels",
        description: "Image results in some SERPs that are scrollable from left to right.",
    },
    {
        _id: "6311f752034582cf9275542e",
        term: "image compression",
        description: "The act of speeding up web pages by making image file sizes smaller without degrading the image’s quality.",
    },
    {
        _id: "6311f752034582cf9275542f",
        term: "image sitemap",
        description: "A sitemap containing only the image URLs on a website.",
    },
    {
        _id: "6311f752034582cf92755430",
        term: "inbound link",
        description: "Link from another site to your website.",
    },
    {
        _id: "6311f752034582cf92755431",
        term: "index",
        description: "A huge database of all the content search engine crawlers have discovered and deem good enough to serve up to searchers.",
    },
    {
        _id: "6311f752034582cf92755432",
        term: "index coverage report",
        description: "A report in Google Search Console that shows you the indexation status of your site’s pages.",
    },
    {
        _id: "6311f752034582cf92755433",
        term: "indexability",
        description: "A search engine’s ability to analyze and store a web page in its database.",
    },
    {
        _id: "6311f752034582cf92755434",
        term: "indexing",
        description: "The storing and organizing of content found during crawling.",
    },
    {
        _id: "6311f752034582cf92755435",
        term: "informational queries",
        description: "A query in which the searcher is looking for information, such as the answer to a question.",
    },
    {
        _id: "6311f752034582cf92755436",
        term: "informational query",
        description: "Query where someone wants to find information, not products.",
    },
    {
        _id: "6311f752034582cf92755437",
        term: "intent",
        description: "In the context of SEO, intent refers to what users really want from the words they typed into the search bar.",
    },
    {
        _id: "6311f752034582cf92755438",
        term: "internal link",
        description: "Link from another page on the same website.",
    },
    {
        _id: "6311f752034582cf92755439",
        term: "internal links",
        description: "Links on your own site that point to your other pages on the same site.",
    },
    {
        _id: "6311f752034582cf9275543a",
        term: "interstitial ad",
        description: "Full-screen interactive ads that cover the interface of the website orapp.",
    },
    {
        _id: "6311f752034582cf9275543b",
        term: "ip address",
        description: "An internet protocol (IP) address is a string of numbers that’s unique to each specific website. We assign domain names to IP addresses because they’re easier for humans to remember but the internet needs these numbers to find websites.",
    },
    {
        _id: "6311f752034582cf9275543c",
        term: "javascript",
        description: "A programming language that adds dynamic elements to static web pages.",
    },
    {
        _id: "6311f752034582cf9275543d",
        term: "javascript seo",
        description: "A part of technical SEO that seeks to make JavaScript-heavy websites more search-friendly.",
    },
    {
        _id: "6311f752034582cf9275543e",
        term: "json-ld",
        description: "JavaScript Object Notation for Linked Data (JSON-LD) is a format for structuring your data. For example, schema.org can be implemented in a number of different formats, JSON-LD is just one of them, but it is the format preferred by Google.",
    },
    {
        _id: "6311f752034582cf9275543f",
        term: "kanban",
        description: "A scheduling system.",
    },
    {
        _id: "6311f752034582cf92755440",
        term: "keyword cannibalization",
        description: "Keyword cannibalization happens when a single website unintentionally targets the same keyword across multiple posts orpages.",
    },
    {
        _id: "6311f752034582cf92755441",
        term: "keyword clustering",
        description: "Keyword clustering is a practice in SEO used to combine similar, relevant keywords into groups (clusters).",
    },
    {
        _id: "6311f752034582cf92755442",
        term: "keyword density",
        description: "Keyword density is a metric that tells us how frequently a keyword is used within a piece of content in relation to the overall word count.",
    },
    {
        _id: "6311f752034582cf92755443",
        term: "keyword difficulty",
        description: "Metric used by SEO tool providers to estimate a keyword’s ranking difficulty.",
    },
    {
        _id: "6311f752034582cf92755444",
        term: "keyword explorer",
        description: "A tool for in-depth keyword research and discovery.",
    },
    {
        _id: "6311f752034582cf92755445",
        term: "keyword ranking",
        description: "A keyword ranking is a website's organic ranking position in the search results for a particular keyword.",
    },
    {
        _id: "6311f752034582cf92755446",
        term: "keyword stemming",
        description: "Process of reducing a word to its ‘stem’ or ‘root’ (e.g., flowers, flowery -> flower).",
    },
    {
        _id: "6311f752034582cf92755447",
        term: "keyword stuffing",
        description: "Repeating the same keywords (or similar phrases) in your content to try to manipulate rankings.",
    },
    {
        _id: "6311f752034582cf92755448",
        term: "keywords",
        description: "Words and phrases that people type into search engines to find what they’re looking for.",
    },
    {
        _id: "6311f752034582cf92755449",
        term: "kpi",
        description: "A 'key performance indicator' is a measurable value that indicates how well an activity is achieving a goal.",
    },
    {
        _id: "6311f752034582cf9275544a",
        term: "lazy loading",
        description: "A way of deferring the loading of an object until it’s needed. This method is often used to improve page speed.",
    },
    {
        _id: "6311f752034582cf9275544b",
        term: "link accessibility",
        description: "The ease with which a link can be found by human visitors or crawlers.",
    },
    {
        _id: "6311f752034582cf9275544c",
        term: "link bait",
        description: "Content specifically formulated to attract links.",
    },
    {
        _id: "6311f752034582cf9275544d",
        term: "link building",
        description: "While 'building' sounds like this activity involves creating links to your website yourself, link building actually describes the process of earning links to your site for the purpose of building your site’s authority in search engines.",
    },
    {
        _id: "6311f752034582cf9275544e",
        term: "link equity",
        description: "The value or authority a link can pass to its destination.",
    },
    {
        _id: "6311f752034582cf9275544f",
        term: "link exchange",
        description: "Also known as reciprocal linking, link exchanges involve 'you link to me and I’ll link to you' tactics. Excessive link exchanges are a violation of Google’s quality guidelines.",
    },
    {
        _id: "6311f752034582cf92755450",
        term: "link explorer",
        description: "A tool for link discovery and analysis.",
    },
    {
        _id: "6311f752034582cf92755451",
        term: "link farm",
        description: "Group of websites created to link to each other to improve search engine rankings.",
    },
    {
        _id: "6311f752034582cf92755452",
        term: "link profile",
        description: "A term used to describe all the inbound links to a select domain, subdomain, or URL.",
    },
    {
        _id: "6311f752034582cf92755453",
        term: "link volume",
        description: "The quantity of links on a page.",
    },
    {
        _id: "6311f752034582cf92755454",
        term: "linked unstructured citations",
        description: "References to a business’ complete or partial contact information on a non-directory platform (like online news, blogs, best-of lists, etc.)",
    },
    {
        _id: "6311f752034582cf92755455",
        term: "local business schema",
        description: "Structured data markup placed on a web page that helps search engines understand information about a business.",
    },
    {
        _id: "6311f752034582cf92755456",
        term: "local pack",
        description: "A pack of typically three local business listings that appear for local-intent searches such as 'oil change near me.'",
    },
    {
        _id: "6311f752034582cf92755457",
        term: "local queries",
        description: "A query in which the searcher is looking for something in a specific location, such as 'coffee shops near me' or 'gyms in Brooklyn.'",
    },
    {
        _id: "6311f752034582cf92755458",
        term: "login forms",
        description: "Refers to pages that require login authentication before a visitor can access the content.",
    },
    {
        _id: "6311f752034582cf92755459",
        term: "long-tail keywords",
        description: "Longer queries, typically those containing more than three words. Indicative of their length, they are often more specific than short-tail queries.",
    },
    {
        _id: "6311f752034582cf9275545a",
        term: "manual penalty",
        description: "Refers to a Google 'Manual Action' where a human reviewer has determined certain pages on your site violate Google’s quality guidelines.",
    },
    {
        _id: "6311f752034582cf9275545b",
        term: "meta descriptions",
        description: "HTML elements that describe the contents of the page that they’re on. Google sometimes uses these as the description line in search result snippets.",
    },
    {
        _id: "6311f752034582cf9275545c",
        term: "meta robots tag",
        description: "Pieces of code that provide crawlers instructions for how to crawl or index web page content.",
    },
    {
        _id: "6311f752034582cf9275545d",
        term: "minification",
        description: "To minify something means to remove as many unnecessary characters from the source code as possible without altering functionality. Whereas compression makes something smaller, minification actually removes things.",
    },
    {
        _id: "6311f752034582cf9275545e",
        term: "mobile-first indexing",
        description: "Google began progressively moving websites over to mobile first indexing in 2018. This change means that Google crawls and indexes your pages based on their mobile version rather than their desktop version.",
    },
    {
        _id: "6311f752034582cf9275545f",
        term: "navigation",
        description: "A list of links that help visitors navigate to other pages on your site. Often, these appear in a list at the top of your website ('top navigation'), on the side column of your website ('side navigation'), or at the bottom of your website ('footer navigation').",
    },
    {
        _id: "6311f752034582cf92755460",
        term: "navigational queries",
        description: "A query in which the searcher is trying to get to a certain location, such as the BBC blog (query = 'bbc blog').",
    },
    {
        _id: "6311f752034582cf92755461",
        term: "nofollow",
        description: "Links marked up with rel='nofollow' do not pass PageRank. Google encourages the use of these in some situations, like when a link has been paid for.",
    },
    {
        _id: "6311f752034582cf92755462",
        term: "noindex tag",
        description: "A meta tag that instructions a search engine not to index the page it’s on.",
    },
    {
        _id: "6311f752034582cf92755463",
        term: "organic",
        description: "Earned placement in search results, as opposed to paid advertisements.",
    },
    {
        _id: "6311f752034582cf92755464",
        term: "pa",
        description: "Similar to DA, Page Authority (PA) predicts an individual page’s ranking ability.",
    },
    {
        _id: "6311f752034582cf92755465",
        term: "page speed",
        description: "Page speed is made up of a number of equally important qualities, such as first contentful/meaningful paint and time to interactive.",
    },
    {
        _id: "6311f752034582cf92755466",
        term: "pagerank",
        description: "A component of Google's core algorithm. It is a link analysis program that estimates the importance of a web page by measuring the quality and quantity of links pointing to it.",
    },
    {
        _id: "6311f752034582cf92755467",
        term: "pages per session",
        description: "Also referred to as 'page depth,' pages per session describes the average number of pages people view of your website in a single session.",
    },
    {
        _id: "6311f752034582cf92755468",
        term: "pagination",
        description: "A website owner can opt to split a page into multiple parts in a sequence, similar to pages in the book. This can be especially helpful on very large pages. The hallmarks of a paginated page are the rel='next' and rel='prev' tags, indicating where each page falls in the greater sequence. These tags help Google understand that the pages should have consolidated link properties and that searchers should be sent to the first page in the sequence.",
    },
    {
        _id: "6311f752034582cf92755469",
        term: "panda",
        description: "A Google algorithm update that targeted low-quality content.",
    },
    {
        _id: "6311f752034582cf9275546a",
        term: "people also ask boxes",
        description: "A box in some SERPs featuring a list of questions related to the query and their answers.",
    },
    {
        _id: "6311f752034582cf9275546b",
        term: "personalization",
        description: "Refers to the way a search engine will modify a person’s results on factors unique to them, such as their location and search history.",
    },
    {
        _id: "6311f752034582cf9275546c",
        term: "programming language",
        description: "Writing instructions in a way a computer can understand. For example, JavaScript is a programming language that adds dynamic (not-static) elements to a web page.",
    },
    {
        _id: "6311f752034582cf9275546d",
        term: "prominence",
        description: "In the context of the local pack, prominence refers to businesses that are well-known and well-liked in the real world.",
    },
    {
        _id: "6311f752034582cf9275546e",
        term: "protocol",
        description: "The 'http' or 'https' preceding your domain name. This governs how data is relayed between the server and browser.",
    },
    {
        _id: "6311f752034582cf9275546f",
        term: "pruning",
        description: "In an SEO context, pruning typically refers to removing low-quality pages in order to increase the quality of the site overall.",
    },
    {
        _id: "6311f752034582cf92755470",
        term: "purchased links",
        description: "Exchanging money, or something else of value, for a link. If a link is purchased, it constitutes an advertisement and should be treated with a nofollow tag so that it does not pass PageRank.",
    },
    {
        _id: "6311f752034582cf92755471",
        term: "qualified lead",
        description: "If you use your website to encourage potential customers to contact you via phone call or form, a 'lead' is every contact you receive. Not all of those leads will become customers, but 'qualified' leads are relevant prospects that have a high likelihood of becoming paying customers.",
    },
    {
        _id: "6311f752034582cf92755472",
        term: "qualified traffic",
        description: "When traffic is 'qualified,' it usually means that the visit is relevant to the intended topic of the page, and therefore the visitor is more likely to find the content useful and convert.",
    },
    {
        _id: "6311f752034582cf92755473",
        term: "query",
        description: "Words typed into the search bar.",
    },
    {
        _id: "6311f752034582cf92755474",
        term: "rankbrain",
        description: "the machine learning component of Google’s core algorithm that adjusts ranking by promoting the most relevant, helpful results.",
    },
    {
        _id: "6311f752034582cf92755475",
        term: "ranking",
        description: "Ordering search results by relevance to the query.",
    },
    {
        _id: "6311f752034582cf92755476",
        term: "redirection",
        description: "When a URL is moved from one location to another. Most often, redirection is permanent (301 redirect).",
    },
    {
        _id: "6311f752034582cf92755477",
        term: "referral traffic",
        description: "Traffic sent to a website from another website. For example, if your website is receiving visits from people clicking on your site from a link on Facebook, Google Analytics will attribute that traffic as 'facebook.com / referral' in the Source/Medium report.",
    },
    {
        _id: "6311f752034582cf92755478",
        term: "regional keywords",
        description: "Refers to keywords unique to a specific locale. Use Google Trends, for example, to see whether 'pop' or 'soda' is the more popular term in Kansas.",
    },
    {
        _id: "6311f752034582cf92755479",
        term: "rel=canonical",
        description: "A tag that allows site owners to tell Google which version of a web page is the original and which are the duplicates.",
    },
    {
        _id: "6311f752034582cf9275547a",
        term: "relevance",
        description: "In the context of the local pack, relevance is how well a local business matches what the searcher is looking for",
    },
    {
        _id: "6311f752034582cf9275547b",
        term: "render-blocking scripts",
        description: "A script that forces your browser to wait to be fetched before the page can be rendered. Render-blocking scripts can add extra round trips before your browser can fully render a page.",
    },
    {
        _id: "6311f752034582cf9275547c",
        term: "rendering",
        description: "The process of a browser turning a website’s code into a viewable page.",
    },
    {
        _id: "6311f752034582cf9275547d",
        term: "resource pages",
        description: "Commonly used for the purpose of link building, resource pages typically contain a list of helpful links to other websites. If your business sells email marketing software, for example, you could look up marketing intitle resources and reach out to the owners of said sites to see if they would include a link to your website on their page.",
    },
    {
        _id: "6311f752034582cf9275547e",
        term: "responsive design",
        description: "Google’s preferred design pattern for mobile-friendly websites, responsive design allows the website to adapt to fit whatever device it’s being viewed on.",
    },
    {
        _id: "6311f752034582cf9275547f",
        term: "rich snippet",
        description: "A snippet is the title and description preview that Google and other search engines show of URLs on its results page. A 'rich' snippet, therefore, is an enhanced version of the standard snippet. Some rich snippets can be encouraged by the use of structured data markup, like review markup displaying as rating stars next to those URLs in the search results.",
    },
    {
        _id: "6311f752034582cf92755480",
        term: "robots.txt",
        description: "Files that suggest which parts of your site search engines should and shouldn't crawl.",
    },
    {
        _id: "6311f752034582cf92755481",
        term: "schema.org",
        description: "Code that 'wraps around' elements of your web page to provide additional information about it to the search engine. Data using schema.org is referred to as 'structured' as opposed to 'unstructured' — in other words, organized rather than unorganized.",
    },
    {
        _id: "6311f752034582cf92755482",
        term: "scraped content",
        description: "Taking content from websites that you do not own and republishing it without permission on your own site.",
    },
    {
        _id: "6311f752034582cf92755483",
        term: "scroll depth",
        description: "A method of tracking how far visitors are scrolling down your pages.",
    },
    {
        _id: "6311f752034582cf92755484",
        term: "scrum board",
        description: "A method of keeping track of tasks that need to be completed to accomplish a larger goal.",
    },
    {
        _id: "6311f752034582cf92755485",
        term: "search engine",
        description: "An information retrieval program that searches for items in a database that match the request input by the user. Examples Google, Bing, and Yahoo.",
    },
    {
        _id: "6311f752034582cf92755486",
        term: "search forms",
        description: "Refers to search functions or search bars on a website that help users find pages on that website.",
    },
    {
        _id: "6311f752034582cf92755487",
        term: "search quality rater guidelines",
        description: "Guidelines for human raters that work for Google to determine the quality of real web pages.",
    },
    {
        _id: "6311f752034582cf92755488",
        term: "search traffic",
        description: "Visits sent to your websites from search engines like Google.",
    },
    {
        _id: "6311f752034582cf92755489",
        term: "search volume",
        description: "The number of times a keyword was searched. Many keyword research tools show an estimated monthly search volume.",
    },
    {
        _id: "6311f752034582cf9275548a",
        term: "seasonal trends",
        description: "Refers to the popularity of keywords over time, such as 'Halloween costumes' being most popular the week before October 31.",
    },
    {
        _id: "6311f752034582cf9275548b",
        term: "seed keywords",
        description: "The term we use to describe the primary words that describe the product or service you provide.",
    },
    {
        _id: "6311f752034582cf9275548c",
        term: "sentiment",
        description: "How people feel about your brand.",
    },
    {
        _id: "6311f752034582cf9275548d",
        term: "serp",
        description: "Stands for 'search engine results page' — the page you see after conducting a search.",
    },
    {
        _id: "6311f752034582cf9275548e",
        term: "serp features",
        description: "Results displayed in a non-standard format.",
    },
    {
        _id: "6311f752034582cf9275548f",
        term: "sitemap",
        description: "A list of URLs on your site that crawlers can use to discover and index your content.",
    },
    {
        _id: "6311f752034582cf92755490",
        term: "spam score",
        description: "A metric used to quantify a domain’s relative risk of penalization by using a series of flags that are highly correlated with penalized sites.",
    },
    {
        _id: "6311f752034582cf92755491",
        term: "spammy tactics",
        description: "Like 'black hat,' spammy tactics are those that violate search engine quality guidelines.",
    },
    {
        _id: "6311f752034582cf92755492",
        term: "srcset",
        description: "Like responsive design for images, SRCSET indicates which version of the image to show for different situations.",
    },
    {
        _id: "6311f752034582cf92755493",
        term: "ssl certificate",
        description: "A 'Secure Sockets Layer' is used to encrypt data passed between the web server and browser of the searcher.",
    },
    {
        _id: "6311f752034582cf92755494",
        term: "structured data",
        description: "Another way to say 'organized' data (as opposed to unorganized). Schema.org is a way to structure your data, for example, by labeling it with additional information that helps the search engine understand it.",
    },
    {
        _id: "6311f752034582cf92755495",
        term: "thin content",
        description: "Content that adds little-to-no value to the visitor.",
    },
    {
        _id: "6311f752034582cf92755496",
        term: "thumbnails",
        description: "Image thumbnails are a smaller version of a larger image.",
    },
    {
        _id: "6311f752034582cf92755497",
        term: "time on page",
        description: "The amount of time someone spent on your page before clicking to the next page. Because Google Analytics tracks time on page by when someone clicks your next page, bounced sessions will clock a time on page of 0.",
    },
    {
        _id: "6311f752034582cf92755498",
        term: "title tag",
        description: "An HTML element that specifies the title of a web page.",
    },
    {
        _id: "6311f752034582cf92755499",
        term: "traffic",
        description: "Visits to a website.",
    },
    {
        _id: "6311f752034582cf9275549a",
        term: "transactional queries",
        description: "The searcher wants to take an action, such as buy something. If keyword types sat in the marketing funnel, transactional queries would be at the bottom.",
    },
    {
        _id: "6311f752034582cf9275549b",
        term: "unnatural links",
        description: "Google describes unnatural links as 'creating links that weren’t editorially placed or vouched for by the site’s owner on a page.' This is a violation of their guidelines and could warrant a penalty against the offending website.",
    },
    {
        _id: "6311f752034582cf9275549c",
        term: "url",
        description: "Uniform Resource Locators are the locations or addresses for individual pieces of content on the web.",
    },
    {
        _id: "6311f752034582cf9275549d",
        term: "url folders",
        description: "Sections of a website occurring after the TLD ('.com'), separated by slashes ('/'). For example, in 'example.com/blog' we could say '/blog' is a folder.",
    },
    {
        _id: "6311f752034582cf9275549e",
        term: "url parameters",
        description: "Information following a question mark that is appended to a URL to change the page’s content (active parameter) or track information (passive parameter).",
    },
    {
        _id: "6311f752034582cf9275549f",
        term: "utm code",
        description: "An urchin tracking module (UTM) is a simple code that you can append to the end of your URL to track additional details about the click, such as its source, medium, and campaign name.",
    },
    {
        _id: "6311f752034582cf927554a0",
        term: "webmaster guidelines",
        description: "Guidelines published by search engines like Google and Bing for the purpose of helping site owners create content that will be found, indexed, and perform well in search results.",
    },
    {
        _id: "6311f752034582cf927554a1",
        term: "white hat",
        description: "Search engine optimization practices that comply with Google’s quality guidelines.",
    },
    {
        _id: "6311f752034582cf927554a2",
        term: "x-robots-tag",
        description: "Like meta robots tags, this tag provides crawlers instructions for how to crawl or index web page content.",
    },
];
