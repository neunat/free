package dev.gabrieljones

import org.scalatest.funsuite.AnyFunSuite

class AppSuite extends AnyFunSuite {
  test("App has a greeting") {
    assert(App.greeting() != null)
  }
}
