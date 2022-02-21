import * as React from 'react';
import { css } from '@emotion/react';

// Sane layout defaults taken from
// https://github.com/necolas/react-native-web/blob/master/packages/benchmarks/src/implementations/emotion/View.js
const viewStyle = css({
  alignItems: 'stretch',
  borderWidth: 0,
  borderStyle: 'solid',
  boxSizing: 'border-box',
  display: 'flex',
  flexBasis: 'auto',
  flexDirection: 'column',
  flexShrink: 0,
  outline: 'none',
  minHeight: 0,
  minWidth: 0,
});

type Tag = undefined | keyof JSX.IntrinsicElements;
type NormalizeTag<T> = T extends null | undefined ? 'div' : T;

type ExtendedProps<T extends Tag, Props> = Omit<
  React.ComponentPropsWithoutRef<NormalizeTag<T>>,
  keyof Props
> &
  Props;
type Props<T extends Tag> = ExtendedProps<T, { tag?: T }>;
type InnerProps<T extends Tag> = Props<T> & {
  innerRef?: React.ForwardedRef<React.ElementRef<NormalizeTag<T>>>;
};

export default function View<T extends Tag>({
  tag: TagElt = 'div',
  innerRef,
  ...props
}: InnerProps<T>): JSX.Element {
  // "expression produces a union type that is too complex to
  // represent" but that error doesn't occur if the `ref` prop is
  // removed here. since typescript can't handle it, but we viewers
  // can verify that everything is good, just ignore it.
  // @ts-ignore
  return <TagElt ref={innerRef} css={viewStyle} {...props} />;
}

const viewComponentCache: {
  // loosely typed cache since we only access it in the one function
  [T in NonNullable<Tag>]?: React.ForwardRefExoticComponent<any>;
} = {};

/** Specialize the tag prop on <View> to a specific value.
 * Correctly types the ref prop.
 *
 * Because React.forwardRef needs to wrap any component receiving the
 * ref prop, we can't specialize the types of both of its props at
 * call time in the way that is needed, hence this workaround.
 *
 * Specialization should happen outside of the calling component, or
 * else the react component will be recreated every time, potentially
 * defeating memoization.
 *
 * Usage:
 * const SpanView = SpecializedView("span");
 * function Usage() {
 *   return <SpanView ref={elt => console.log(elt)} />;
 * }
 */
export function SpecializedView<T extends NonNullable<Tag>>(
  tag: T,
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Props<T>> &
    React.RefAttributes<React.ElementRef<NormalizeTag<T>>>
> {
  const existing = viewComponentCache[tag];
  if (existing != null) {
    // this is... trivially non-null? not sure why it's still typed
    // nullable. probably because it's the result of a mapped type?
    // cast away the nullability here
    return existing as NonNullable<typeof existing>;
  }

  return (viewComponentCache[tag] = React.forwardRef<
    React.ElementRef<NormalizeTag<T>>,
    Props<T>
  >((props, ref) => <View tag={tag} innerRef={ref} {...props} />));
}
