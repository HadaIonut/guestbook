(ns guestbook.db.core
  (:require
    [korma.db :as db]
    [korma.core :refer :all :rename {update sql-update}]
    [clj-time.jdbc]
    [conman.core :as conman]
    [mount.core :refer [defstate]]
    [environ.core :as envi]
    [guestbook.config :refer [env]]))

