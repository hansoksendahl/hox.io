# K-Ink: AI Agent Based CLI Framework

**K-Ink** is an AI-powered, modular Command Line Interface (CLI) tool built for
developers who want dynamic, open-ended agents based on the [ReAct
model](https://arxiv.org/abs/2210.03629). With K-Ink, you can create tools,
automate workflows, and tackle complex tasks—all while extending its
functionality with ease.

🚀 **Check out the GitHub repository:** [K-Ink on
GitHub](https://github.com/hansoksendahl/k-ink).

## A Vision for Self-Improving AI Tools

The idea for **K-Ink** was sparked by an obsession with what AI could become:
not just a tool for solving tasks but a self-improving, ever-expanding ecosystem
of intelligence. What if we could build tools powered by AGI agents that didn’t
just automate tasks but created entirely new capabilities—tools that could
learn, adapt, and even generate other tools?

**K-Ink** is my first step toward that vision: an AI-powered Command Line
Interface (CLI) tool that isn’t just reactive but _creative_. Built on the
[ReAct model](https://arxiv.org/abs/2210.03629), K-Ink thrives on modularity,
enabling you to easily extend its functionality. It doesn’t just execute
commands; it writes its own code, solves complex problems, and evolves as it
works.

Imagine a network of tools like K-Ink, where each node expands the capabilities
of the others. An ecosystem where AI agents aren’t siloed but interconnected,
learning from each other and driving exponential growth in functionality and
innovation. That’s the dream.

K-Ink is the foundation—a tool designed to be as dynamic as the ideas it helps
bring to life. If you’re ready to step into the future of AI-powered
development, K-Ink is waiting.

---

## Setup: Welcome to the Madness

What happens when you give an AI access to your filesystem, the power to write
its own code, and the ability to execute it? Absolute chaos—or absolute
brilliance. These questions are what led to the creation of **K-Ink**. Let’s
crack it open and see what makes this beautiful monster tick.

### Dependencies

Before we dive in, here are the key ingredients that bring K-Ink to life:

- [Bun](https://bun.sh/) - Our build environment of choice. It bundles
  TypeScript and compiles everything into a sleek binary. Simple, fast,
  efficient.
- [Ink](https://github.com/vadimdemedes/ink) - A CLI tool that brings
  React-based flexbox layouts to the terminal. Yes, React in your terminal.
  Welcome to the future.
- [React](https://react.dev/) - The beloved UI library that makes managing state
  and components effortless—whether it’s a browser or your terminal.
- [LangChain](https://www.langchain.com/) - A powerful toolkit for working with
  Large Language Models (LLMs), enabling advanced AI wizardry.
- [LangGraph](https://langchain-ai.github.io/langgraphjs/) - A graph-based
  toolset for orchestrating AI agents, because linear logic is for mere mortals.

---

## Getting Started

First, we’ll set up the repository for `k-ink`.

We assume you’ve got **Bun** installed globally. (If not, go
[here](https://bun.sh/) and follow the instructions. It’s literally one
command.) Got it installed? Great. Let’s roll:

```shell
# Create the `k-ink` directory
mkdir k-ink

# Navigate to the new directory
cd k-ink

# Initialize a new Bun project
bun init
# Respond to the prompts:
# package name (k-ink): k-ink
# entry point (index.ts): src/index.tsx
```

Now you’ve got the bones of a project: a `package.json` for dependencies, a
`tsconfig.json` for TypeScript settings, and a structure to build on. Let’s
start adding some flesh.

## The Core Libraries

### Installing Ink

Ink brings React to the terminal, making CLI layouts intuitive for frontend
devs. It renders flexbox components like `<Box />` and `<Text />` effortlessly.
Let’s install it:

```shell
bun add ink react
bun add -D @types/react
```

### Installing LangChain and LangGraph

LangChain handles the heavy lifting with LLMs, while LangGraph simplifies
building AI agents. These two libraries together are the secret sauce of K-Ink:

```shell
bun add @langchain/core @langchain/langgraph zod
```

With these installed, K-Ink has the foundation to interact with your filesystem,
make decisions, and generate code. Next, we’ll define how the AI thinks and
acts.

### Preparing Your Project Structure

Before we dive into adding files, let’s set up the directory structure we’ll
need. Run the following command to create the necessary directories:

```shell
mkdir -p src/lib/langchain/tools src/components
```

This will create a `lib/langchain` directory for housing your AI logic and
tools, and a `components` directory for building the CLI interface. We’ll add
files to these directories in the next steps. With the groundwork laid, let’s
start building!

---

## Giving K-Ink a Brain

We’ll start by defining the AI model and the tools it can use. For simplicity,
this guide uses OpenAI’s GPT, but you can plug in any LLM of your choice.

### Installing the LangChain OpenAI Chat Model

If you’re planning to use OpenAI for the chat model, you’ll need to install the
necessary package. Run this command to add it to your project:

```shell
bun add @langchain/openai
```

This package is the bridge between your CLI tool and OpenAI’s powerful language
model.

### Defining the model

In /src/lib/langchain/model.ts, we define our LLM. For this example, we use
OpenAI’s gpt-4o-mini model for cost-efficiency:

```typescript
// ./src/lib/langchain/model.ts
import { ChatOpenAI } from '@langchain/openai'

const model = new ChatOpenAI({ model: 'gpt-4o-mini' })

export default model
```

### Setting Up Environment Variables

To use the OpenAI chat model, you’ll need to provide an API key via an
environment variable. Bun makes this easy by supporting `.env` and `.env.local`
files out of the box.

Here’s how your `.env.local` file should look:

```shell
# .env.local
OPENAI_API_KEY="your-api-key"
```

Make sure to replace "your-api-key" with your actual OpenAI API key. Once this
is set, your project will have everything it needs to connect to OpenAI’s
services seamlessly.

---

### Defining Tools

Tools are extensions of the AI’s abilities. Here’s how to define a tool for
reading files:

```typescript
// ./src/lib/langchain/tools/file-read.ts
import { tool } from '@langchain/core/tools'
import { readFile } from 'node:fs/promises'
import { z } from 'zod'

const FileReadSchema = z.object({
  path: z.string(),
})

const fileReadTool = tool(
  async ({ path }): Promise<string> => {
    const file = await readFile(path, { encoding: 'utf8' })

    return file
  },
  {
    name: 'fileRead',
    description: 'Read a file',
    schema: FileReadSchema,
  },
)

export default fileReadTool
```

Let’s give our AI the ability to write files to the local filesystem. This tool
pairs nicely with the file-read tool, enabling your AI to both consume and
create content.

```typescript
// ./src/lib/langchain/tools/file-write.ts
import { tool } from '@langchain/core/tools'
import { writeFile } from 'node:fs/promises'
import { z } from 'zod'

const FileWriteSchema = z.object({
  path: z.string(),
  content: z.string(),
})

const fileWriteTool = tool(
  async ({ path = process.cwd(), content }): Promise<boolean> => {
    await writeFile(path, content, { encoding: 'utf8' })

    return true
  },
  {
    name: 'file-write',
    description: 'Write a file',
    schema: FileWriteSchema,
  },
)

export default fileWriteTool
```

Once you’ve defined your tools, centralize them for easy management.

```typescript
// ./src/lib/langchain/tools/index.ts
import fileRead from './file-read'
import fileWrite from './file-write'

const tools = [fileRead, fileWrite]

export default tools
```

---

## The AIResponse Component

With the model and tools ready, let’s build the AiResponse component. This will
handle the heavy lifting, connecting user inputs to the AI and rendering the
results.

```typescript
// ./src/components/ai-response.tsx
import { Text } from 'ink'
import { useEffect, useState } from 'react'
import { createReactAgent } from '@langchain/langgraph/prebuilt'
import { MemorySaver } from '@langchain/langgraph'
import model from '../lib/langchain/model'
import tools from '../lib/langchain/tools'

interface AiResponseProps {
  messages: string | string[]
}

const AiResponse = ({ messages }: AiResponseProps) => {
  const [responseMessage, setResponseMessage] = useState('')

  // This is a React hook that runs the code inside the function whenever the
  // `messages` prop changes.
  useEffect(() => {
    // We're going to define an async function that will process the messages
    const processResponse = async () => {
      // We're going to create an agent using the `createReactAgent` function.
      // The React being referred to here is not the React library, but the
      // [ReAct Agent architecture](https://arxiv.org/abs/2210.03629).
      const agent = createReactAgent({
        llm: model,
        tools,
        checkpointSaver: new MemorySaver(),
      })

      // We're going to invoke the agent with a system message and the user's
      // message. The `thread_id` is set to 42.
      const response = await agent.invoke(
        {
          messages: [
            {
              role: 'system',
              content:
                'This is K-Ink an AI CLI tool.',
            },
            ...(Array.isArray(messages) ? messages : [messages]).map(
              content => ({ role: 'user', content }),
            ),
          ],
        },
        { configurable: { thread_id: 42 } },
      )

      // We're going to the most recent message content from the response.
      const mostRecentMessageContent =
        response.messages[response.messages.length - 1].content

      // If the most recent message content is a string, we're going to set it.
      if (typeof mostRecentMessageContent === 'string') {
        setResponseMessage(mostRecentMessageContent)
      }
    }

    processResponse()
  }, [messages])

  // We're going to render the response message as a text.
  return <Text>{responseMessage}</Text>
}

export default AiResponse
```

## Bringing It All Together

Finally, wrap it all up with an App component to handle command-line arguments
and render the AiResponse:

```typescript
// ./src/components/app.tsx
import { parseArgs } from 'node:util'
import AiResponse from './ai-response'

const App = () => {
  // Parse the command line arguments
  const args = parseArgs({
    args: process.argv.slice(2),
    options: { message: { type: 'string', short: 'm' } },
  })

  return <AiResponse messages={args.values.message ?? ''} />
}

export default App
```

And render it:

```typescript
// ./src/index.tsx
import { render } from 'ink'
import App from './components/app'

render(<App />)
```

## Eating the Dog Food

At first glance, this might not seem like much—just a CLI tool that can read and
write files. But hold onto your La Croix, because we’re just getting started.
With the tools we’ve built so far, we now have the ability to create other
tools. And those tools? They can create _even more tools_. We’re diving into
recursive genius here, people. It’s tools all the way down.

This is where **K-Ink** starts to feel alive. It’s not just a helper—it’s a
builder, a creator, and sometimes, a little bit of a show-off. Let’s see how it
flexes its brilliance.

## Creating a Tool to Read Directories

Let’s start with something small. We already have the ability to read files, so
it only makes sense to add the ability to read directories as well. Instead of
writing the code ourselves, let’s ask K-Ink to do it for us:

```shell
bun run src/index.tsx -m "\
Read the tools in ./src/lib/langchain/tools and create a new tool called
directory-read that will read the contents of a directory. Update the exported
tools in ./src/lib/langchain/tools/index.ts"
```

And just like that, K-Ink responds, calmly and confidently, that it’s done
exactly what we asked. Here’s what it says:

> The new tool called `directory-read` has been created to read the contents of
> a directory, and the exported tools in `./src/lib/langchain/tools/index.ts`
> have been updated accordingly.
>
> Here are the changes made:
>
> 1. **Directory Read Tool Created (`directory-read.ts`):**
>
>    ```typescript
>    import { tool } from '@langchain/core/tools'
>    import { readdir } from 'node:fs/promises'
>    import { z } from 'zod'
>
>    const DirectoryReadSchema = z.object({
>      path: z.string().optional(),
>    })
>
>    const directoryReadTool = tool(
>      async ({ path = '.' }): Promise<string[]> => {
>        const files = await readdir(path, { encoding: 'utf8' })
>        return files
>      },
>      {
>        name: 'directory-read',
>        description: 'Read the contents of a directory',
>        schema: DirectoryReadSchema,
>      },
>    )
>
>    export default directoryReadTool
>    ```
>
> 2. **Updated index.ts:**
>
>    ```typescript
>    import fileRead from './file-read'
>    import fileWrite from './file-write'
>    import directoryRead from './directory-read'
>
>    const tools = [fileRead, fileWrite, directoryRead]
>
>    export default tools
>    ```
>
> Everything is in place now! Let me know if you need any further assistance.

At this point, you might be wondering: How did K-Ink do that? How did it
understand the structure of the existing tools and create something entirely new
based on them? The answer lies in its design: K-Ink isn’t just a tool—it’s a
self-improving system. It doesn’t just replicate patterns; it learns, adapts,
and builds on what’s already there.

Sure, you could peek behind the curtain and analyze how it models tasks based on
the existing tools. But where’s the fun in that? Sometimes it’s better to
embrace the mystery and let K-Ink work its magic. Either way, you now have a
directory-read tool where there wasn’t one before, and the network of
possibilities just expanded.

The proof is in the pudding—and this pudding is brimming with tapioca pearls of
brilliance.

---

## Conclusion

So, there you have it: **K-Ink**, a CLI tool that doesn’t just execute tasks—it
evolves, learns, and turns mundane workflows into opportunities for exponential
growth. The best part? This isn’t just a concept—it’s a fully functional
framework for creating AI-powered tools that work _for you_. And this is only
the beginning.

K-Ink is the foundation of a vision where tools don’t just work independently
but as part of a connected ecosystem, driving each other’s growth and expanding
capabilities dynamically.

So go forth, and start building something incredible. Follow the steps in this
guide, and if you put everything in the right places, it should just work. No
syntax errors, no “oh no, I missed a step!” nonsense. Just K-Ink doing what it
does best: making you look good while pushing the boundaries of what AI can do.

Grab your terminal, fire up K-Ink, and let the future begin. The genius is
ready—are you?

[K-Ink on GitHub](https://github.com/hansoksendahl/k-ink).
