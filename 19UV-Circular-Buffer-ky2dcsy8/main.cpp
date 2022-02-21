#include <iostream>
#include <cstdint>

class CircularBuffer {
public:
  CircularBuffer(size_t size) {
    this->buffer_size = size;
    this->buffer = new uint8_t[size];

    this->read_ptr = this->buffer;
    this->write_ptr = this->buffer;
  }
private:
  size_t buffer_size;
  uint8_t* buffer;

  uint8_t* write_ptr;
  uint8_t* read_ptr;
};

int main() {
  std::cout << "Hello World!\n";
}