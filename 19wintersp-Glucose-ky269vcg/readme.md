# Glucose

**A simple bitmap image file format.**

Glucose is designed to be a simple way of demonstrating bitmap images, using basic but comon features to encode image data.

Licensed under the MIT license.

## Format specification

The suggested file extension for glucose files is ".sgr". All values are big-endian.

The basic file structure is as follows:

| Section   | Size |
|-----------|------|
| Magic     | 4B   |
| Width     | 2B   |
| Height    | 2B   |
| Type      | 3b   |
| Bit depth | 2b   |
| Flags     | 3b   |
| Bitmap    | -    |
| EOF       | 1B   |

Each section is detailed further below.

### Magic

The file magic is a four-byte section which should always contain the constant (hex) `0163494d`.

It is the first part of the file and can be used to identify that it is a glucose image. The first three bytes of the magic are always such, however the last byte can change based on the specification version.

### Width and Height

The width and height sections are both two bytes in length, and contain an unsigned 16-bit integer. These denote the dimensions of the image.

If the value of either width or height is zero, the image is invalid. This permits dimensions from 1..2^16-1 inclusive.

### Type

The type field is a three-bit unsigned integer denoting an enumerated value. The values and their meanings are listed here:

| Value | Type  |
|-------|-------|
| 0     | Luma  |
| 1     | LumaA |
| 2     | RGB   |
| 3     | RGBA  |
| 4     | BGR   |
| 5     | BGRA  |

// finish

### Bit depth

The bit depth field is a two-bit unsigned integer, which represents the per-pixel bit size. The number of per-channel bits is 2^bit depth.

### Flags

The flags are three bits before the main bitmap payload which encode some extra boolean information.

Currently, all flags are undefined and reserved for future use. They should be set to zero.

### Bitmap

The main image payload is contained in the bitmap section, which can have infinite size, but must be at least one byte in length.

The data is laid out row-by-row, with the top-right pixel (0, 0) being the first, followed by the pixel to the right, etc. When the end of the row is reached, writing will continue from the first pixel on the next row.

Pixels are not aligned to a certain size. The whole bitmap section is end-padded with zeros to ensure that it is byte-aligned.

### EOF

The last section of the file is a one-byte EOF marker, which should always contain the byte (hex) `04`.
