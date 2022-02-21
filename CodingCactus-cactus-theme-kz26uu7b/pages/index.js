import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { View, Header, Text, rcss, Root, Button, Select, IconButton, Surface, CodeIcon } from './rui-standalone';
import theme from "./theme.js"
import { ThemePreview } from "./theme-preview.js";

const LANGUAGES = [
  { title: 'C++', value: 'cpp' },
  { title: 'Python', value: 'python' },
  { title: 'JavaScript', value: 'js' },
  { title: 'Ruby', value: 'ruby' },
];

function createThemeConsoleSnippet() {
  return `let theme = ${JSON.stringify(theme, null, 4)};
const root = document.querySelector(".replit-ui-theme-root");
Object.entries(theme).forEach(([key, val]) => {
  if (key === "name" || key === "brightness") {
    return;
  }
  root.style.setProperty(val.name, val.color);
});`
}

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[1]);

  React.useEffect(() => {
    const root = document.querySelector(".replit-ui-theme-root");
    Object.entries(theme).forEach(([key, val]) => {
      if (key === "name" || key === "brightness") {
        return;
      }
      root.style.setProperty(val.name, val.color);
    });
  }, []);

  return (
    <Root>
      <View css={[
        rcss.p(24),
        rcss.colWithGap(24),
      ]}>
        <View>
          <Header variant="headerDefault">Theme Preview</Header>
        </View>
        <ThemePreview theme={theme} />
        {["default", "higher", "highest"].map(bg => <Surface background={bg}>
          <View css={[
            rcss.p(16),
            rcss.colWithGap(8),
            rcss.align.start
          ]}>
            <View>
              <Header variant="headerDefault">Surface {bg}</Header>
            </View>
            <Text>This is some text in the custom theme.</Text>
            <Select
              items={LANGUAGES}
              initialSelectedItem={selectedLanguage}
              onChange={setSelectedLanguage}
            />
            <IconButton alt="size 28" size={28}>
              <CodeIcon />
            </IconButton>
            <Button
              colorway="primary"
              iconLeft={<CodeIcon />}
              filled
              text="Primary"
            />
            <Button
              colorway="positive"
              iconLeft={<CodeIcon />}
              filled
              text="Positive"
            />
            <Button
              colorway="negative"
              iconLeft={<CodeIcon />}
              filled
              text="Negative"
            />
            <View css={rcss.color.accentPrimaryDefault}>RUI in Replspace!</View>
          </View>
        </Surface>)}
        <View>
          <textarea value={createThemeConsoleSnippet()} />
        </View>
      </View>
    </Root>
  )
}

