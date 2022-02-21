use std::{ error, result };

use bit_manager::{ BitRead, BitReader, BitWrite, BitWriter };

#[derive(Clone, Debug, PartialEq)]
pub enum Error {
	IoError(String),
}

impl error::Error for Error {}

impl Display for Error {
	// TODO!!
}

pub type Result<T> = result::Result<T, Error>;
