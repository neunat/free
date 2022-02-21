use std::io::{ Result, Read, Write };

pub struct BitWriter<W: Write> {
	pub writer: W,
	current: u8,
	written: u8,
}

impl<W: Write> BitWriter<W> {
	pub fn new(writer: W) -> Self {
		Self {
			writer,
			current: 0,
			written: 0,
		}
	}

	pub fn align(&mut self) -> Result<()> {
		let byte = self.current << (8 - self.written);
		self.writer.write(&[ byte ])?;
		self.current = 0;
		self.written = 0;
		Ok(())
	}

	pub fn flush(&mut self) -> Result<()> {
		self.writer.write(&[ self.current ])?;
		self.current = 0;
		self.written = 0;
		Ok(())
	}

	pub fn write_byte(&mut self, byte: u8) -> Result<()> {
		if self.written == 0 {
			writer.write(&[ byte ])
		} else {
			let written = self.written;
			let mask = (2.pow(written) - 1) << (8 - written);
			self.current <<= 8 - written;
			self.current |= mask & byte;
			self.flush()?;
			self.current = !mask & byte;
			self.written = 8 - written;
			Ok(())
		}
	}

	pub fn write_bit(&mut self, bit: bool) -> Result<()> {
		self.current = (self.current << 1) + if bit { 1 } else { 0 };
		self.written += 1;
		if self.written == 8 {
			self.flush()
		} else {
			Ok(())
		}
	}
}

pub struct BitReader<R: Read> {
	pub reader: R,
	current: u8,
	read: u8,
}

impl<R: Read> BitReader<R> {
	pub fn new(reader: R) -> Self {
		Self {
			reader,
			current: 0,
			read: 0,
		}
	}

	fn read(&mut self) -> Result<u8> {
		let mut buf = [ 0 ];
		match self.reader.read(&mut buf) {
			Ok(0) => Err(ErrorKind::UnexpectedEof.into()),
			Ok(_) => Ok(buf[0]),
			error => error,
		}
	}

	pub fn read_byte(&mut self) -> Result<u8> {
		if self.read == 0 {
			self.reader.read()
		} else {
			let byte = self.read()?;
			//
		}
	}
}
