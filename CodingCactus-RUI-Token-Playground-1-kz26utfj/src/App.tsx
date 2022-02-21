/** @jsx jsx */
import { jsx } from '@emotion/react'

import * as React from 'react'
import { vars, rcss } from './rui/tokens'
import { css } from '@emotion/react';
import View from './rui/View'
import { switchTheme } from './rui/themes'

export default function App() {
  return (
    <main>
      <View css={[rcss.colWithGap(24), rcss.p(48)]}>
        <View css={[rcss.rowWithGap(16), rcss.justify.spaceBetween]}>
          <h1 css={{
            fontSize: vars.fontSizeHeaderDefault,
            color: vars.accentPrimaryStronger,
            fontWeight: vars.fontWeightBold,
            display: 'inline-block',
          }}>
            RUI Token Playground
          </h1>
          <button css={{
            backgroundColor: vars.backgroundHighest,
            padding: vars.space8,
            borderRadius: vars.borderRadius8,
            '&:hover': {
              backgroundColor: vars.outlineDimmer
            }
          }}
            onClick={switchTheme}>
            Switch theme
          </button>
        </View>

        <p css={{ fontSize: vars.fontSizeDefault }}>
          Look in {` `}
          <span css={[
            rcss.font.code, 
            rcss.backgroundColor.backgroundHighest,
            rcss.px(4),
          ]}>
            src/App.tsx
          </span>
          {` `}to see and edit this file!
        </p>

        <View css={[rcss.colWithGap(16),
        {
          padding: vars.space16,
          backgroundColor: vars.backgroundHigher,
          borderRadius: vars.borderRadius8,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: vars.outlineDimmest,
        }]} >
          <h3 css={{
            fontSize: vars.fontSizeSmall, fontWeight: vars.fontWeightMedium,
            textTransform: 'uppercase',
            color: vars.foregroundDimmest,
            letterSpacing: '1px',
          }}>
            Font Size
          </h3>

          <p css={{ fontSize: vars.fontSizeHeaderBig }}>
            fontSizeHeaderBig
          </p>
          <p css={{ fontSize: vars.fontSizeHeaderDefault }}>
            fontSizeHeaderDefault
          </p>
          <p css={{ fontSize: vars.fontSizeSubheadBig }}>
            fontSizeSubheadBig
          </p>
          <p css={{ fontSize: vars.fontSizeSubheadDefault }}>
            fontSizeSubheadDefault
          </p>
          <p css={{ fontSize: vars.fontSizeDefault }}>
            fontSizeDefault
          </p>
          <p css={{ fontSize: vars.fontSizeSmall }}>
            fontSizeSmall
          </p>
        </View>

        <View css={[rcss.colWithGap(16),
        {
          padding: vars.space16,
          backgroundColor: vars.backgroundHigher,
          borderRadius: vars.borderRadius8,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: vars.outlineDimmest,
        }]} >
          <h3 css={{
            fontSize: vars.fontSizeSmall, fontWeight: vars.fontWeightMedium,
            textTransform: 'uppercase',
            color: vars.foregroundDimmest,
            letterSpacing: '1px',
          }}>
            Color
          </h3>

          <View css={rcss.colWithGap(8)}>
            <p>accentPrimaryStrongest</p>
            <div css={{
              backgroundColor: vars.accentPrimaryStrongest,
              padding: vars.space8,
              borderRadius: vars.borderRadius8,
              height: vars.space32,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>accentPrimaryStronger</p>
            <div css={{
              backgroundColor: vars.accentPrimaryStronger,
              padding: vars.space8,
              borderRadius: vars.borderRadius8,
              height: vars.space32,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>accentPrimaryDefault</p>
            <div css={{
              backgroundColor: vars.accentPrimaryDefault,
              padding: vars.space8,
              borderRadius: vars.borderRadius8,
              height: vars.space32,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>accentPrimaryDimmer</p>
            <div css={{
              backgroundColor: vars.accentPrimaryDimmer,
              padding: vars.space8,
              borderRadius: vars.borderRadius8,
              height: vars.space32,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>accentPrimaryDimmest</p>
            <div css={{
              backgroundColor: vars.accentPrimaryDimmest,
              padding: vars.space8,
              borderRadius: vars.borderRadius8,
              height: vars.space32,
            }}>
            </div>
          </View>
        </View>


        <View css={[rcss.colWithGap(16),
        {
          padding: vars.space16,
          backgroundColor: vars.backgroundHigher,
          borderRadius: vars.borderRadius8,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: vars.outlineDimmest,
        }]} >
          <h3 css={{
            fontSize: vars.fontSizeSmall, fontWeight: vars.fontWeightMedium,
            textTransform: 'uppercase',
            color: vars.foregroundDimmest,
            letterSpacing: '1px',
          }}>
            Spacing
          </h3>

          <View css={rcss.colWithGap(8)}>
            <p>space2</p>
            <div css={{
              backgroundColor: vars.backgroundHighest,
              borderRadius: vars.borderRadius8,
              height: vars.space2,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>space4</p>
            <div css={{
              backgroundColor: vars.backgroundHighest,
              borderRadius: vars.borderRadius8,
              height: vars.space4,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>space8</p>
            <div css={{
              backgroundColor: vars.backgroundHighest,
              borderRadius: vars.borderRadius8,
              height: vars.space8,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>space12</p>
            <div css={{
              backgroundColor: vars.backgroundHighest,
              borderRadius: vars.borderRadius8,
              height: vars.space12,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>space16</p>
            <div css={{
              backgroundColor: vars.backgroundHighest,
              borderRadius: vars.borderRadius8,
              height: vars.space16,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>space24</p>
            <div css={{
              backgroundColor: vars.backgroundHighest,
              borderRadius: vars.borderRadius8,
              height: vars.space24,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>space32</p>
            <div css={{
              backgroundColor: vars.backgroundHighest,
              borderRadius: vars.borderRadius8,
              height: vars.space32,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>space48</p>
            <div css={{
              backgroundColor: vars.backgroundHighest,
              borderRadius: vars.borderRadius8,
              height: vars.space48,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>space64</p>
            <div css={{
              backgroundColor: vars.backgroundHighest,
              borderRadius: vars.borderRadius8,
              height: vars.space64,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>space128</p>
            <div css={{
              backgroundColor: vars.backgroundHighest,
              borderRadius: vars.borderRadius8,
              height: vars.space128,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>space256</p>
            <div css={{
              backgroundColor: vars.backgroundHighest,
              borderRadius: vars.borderRadius8,
              height: vars.space256,
            }}>
            </div>
          </View>

        </View>


        <View css={[rcss.colWithGap(16),
        {
          padding: vars.space16,
          backgroundColor: vars.backgroundHigher,
          borderRadius: vars.borderRadius8,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: vars.outlineDimmest,
        }]} >
          <h3 css={{
            fontSize: vars.fontSizeSmall, fontWeight: vars.fontWeightMedium,
            textTransform: 'uppercase',
            color: vars.foregroundDimmest,
            letterSpacing: '1px',
          }}>
            Border Radius
          </h3>

          <View css={rcss.colWithGap(8)}>
            <p>borderRadius1</p>
            <div css={{
              backgroundColor: vars.backgroundHighest,
              borderRadius: vars.borderRadius1,
              height: vars.space48,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>borderRadius2</p>
            <div css={{
              backgroundColor: vars.backgroundHighest,
              borderRadius: vars.borderRadius2,
              height: vars.space48,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>borderRadius4</p>
            <div css={{
              backgroundColor: vars.backgroundHighest,
              borderRadius: vars.borderRadius4,
              height: vars.space48,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>borderRadius8</p>
            <div css={{
              backgroundColor: vars.backgroundHighest,
              borderRadius: vars.borderRadius8,
              height: vars.space48,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>borderRadius16</p>
            <div css={{
              backgroundColor: vars.backgroundHighest,
              borderRadius: vars.borderRadius16,
              height: vars.space48,
            }}>
            </div>
          </View>

          <View css={rcss.colWithGap(8)}>
            <p>borderRadiusRound</p>
            <div css={{
              backgroundColor: vars.backgroundHighest,
              borderRadius: vars.borderRadiusRound,
              height: vars.space48,
            }}>
            </div>
          </View>

        </View>

      </View>
    </main >
  )
}