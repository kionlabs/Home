import { Client } from '@notionhq/client';

// Initialize Notion client using environment variable NOTION_TOKEN (or NOTION_KEY)
const notion = new Client({ auth: process.env.NOTION_KEY });

export interface NotionPageParams {
  name: string;
  contact: string;
  organization: string;
  interest: string;
  message: string;
}

/**
 * Create a Notion page in the target database.
 * Ensure NOTION_TOKEN and NOTION_DATABASE_ID are defined in .env.local.
 */
export async function createNotionPage({
  name,
  contact,
  organization,
  interest,
  message,
}: NotionPageParams): Promise<void> {
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!databaseId) {
    throw new Error('Missing NOTION_DATABASE_ID env variable');
  }
  await notion.pages.create({
    parent: { database_id: databaseId },
    properties: {
      Name: { title: [{ text: { content: name } }] },
      Contact: { rich_text: [{ text: { content: contact } }] },
      Organization: { rich_text: [{ text: { content: organization } }] },
      Interest: { rich_text: [{ text: { content: interest } }] },
      Message: { rich_text: [{ text: { content: message } }] },
    },
  });
}
