(ns guestbook.db.core
  (:require 
    [korma.db :as db]
    [korma.core :refer :all :rename {update sql-update}]
    [clj-time.jdbc]
    [conman.core :as conman]
    [mount.core :refer [defstate]]
    [guestbook.config :refer [env]]))

(def debe 
  (db/create-db
    (db/mysql {:db "ionut"
            :user "root"
            :password "whitecityromania"
            :host "172.17.0.3"
            :port "3306"})))

(db/default-connection debe)

(defentity BIGBOI)

(select BIGBOI)
  
(defn get-messages [] println "test")
(defn save-message [{:keys [message]}]
  (insert BIGBOI (values [{:name message}]))
  println message)
