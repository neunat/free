(ns main
  ""
  (:require [clojure.core.memoize :as memo]
            [clojure.tools.logging :refer [infof warn warnf error errorf]]))

(defn packer
  "Function to compress multiple values of 'c' in string 's' to one,
  and limit the size of the resulting string to 'n' characters. This
  should be the quickest way, as we don't have to more than 'n' checks."
  ([s c]
    (packer s c (count s)))
  ([s c n]
    (loop [inp s
           ans (transient [])
           lst nil]
      (let [f (first inp)]
        (if (and f (< (count ans) n))
          (recur (rest inp) (if (= f lst c) ans (conj! ans f)) f)
          (apply str (persistent! ans)))))))

(infof "answer: %s" (packer "a b c" \space))
(infof "answer: %s" (packer "aa bb cc" \space))
(infof "answer: %s" (packer "aa  bb   cc" \space 5))