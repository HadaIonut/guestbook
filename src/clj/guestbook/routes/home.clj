(ns guestbook.routes.home
  (:require [guestbook.layout :as layout]
            [ring.util.http-response :as response]
            [korma.db :as db]
            [korma.core :refer :all :rename {update sql-update}]
            [buddy.auth.backends :as backends]
            [buddy.auth.middleware :refer (wrap-authentication)]
            [buddy.sign.jwt :as jwt]
            [digest :as dig]
            [cheshire.core :as json]
            [clojure.java.io :as io]
            [environ.core :refer [env]]
            [clojure.string :as string]
            [guestbook.db.core :as d]
            [ring.util.response :refer [redirect]]
            [compojure.core :refer [defroutes GET POST]]
            [struct.core :as st]))

(def debe
  (db/create-db
    (db/mysql {:db "ionut"
               :user "root"
               :password (env :db-pass)
               :host "172.17.0.2"
               :port "3306"})))

(db/default-connection debe)

(defentity BIGBOI)
(defentity Users)
(defentity CS)

(select BIGBOI)
(select Users)
(select CS)

(def secret "mysecret")
(def backend (backends/jws {:secret secret}))

(defn get-connection [LoginUser] 
  (select Users
          (fields :Username :Email)
          (where {:Username LoginUser})))

(defn test-page []
  (selmer.parser/render-file "index.html" {:test "test"}))

(defn login-handler
  [request LoginUser LoginPass]
  (let [data (:form-params request)
        user (select Users
                     (fields :id)
                     (where {:Username LoginUser :Password LoginPass}))
        token (jwt/sign {:user (:id user)} secret)] (println token)
    {:status 200
     :body (json/encode {:token token})
     :headers {:content-type "application/json"}})
  (let [users (select Users (fields :Username :Password) (where {:Username LoginUser}))
        exists? (empty? users)]
  (if-not exists? 
  (selmer.parser/render-file "logged.html"
                             {:connected (get-connection LoginUser)})
  (selmer.parser/render-file "login.html" {:failed "Username or password combination not found"}))))

(defn home-page [& [name message errors]]
  (layout/render
    "home.html"
    (merge {:name name
            :message message})))

(defn save-message [name message]
  (insert BIGBOI (values {:name name :message message}))
  (home-page))

(defn get-hash [hashed]
  (sql-update BIGBOI (set-fields {:current hashed})))

(defn get-messages [& hashed]
  (get-hash hashed)
  (select BIGBOI
          (fields :name :message :id :hash :current)))       
  
(defn selector [id]
  (select BIGBOI
          (fields :message :id)
          (where {:id id}))
  )

(defn registerUser [User email Pass]

  (let [users (select Users (fields :Username) (where {:Username User}))
        exists? (empty? users)]
    (if exists? (insert Users
                        (values {:Username User
                                 :Password Pass
                                 :Email email})))

    (selmer.parser/render-file "login.html" {:test "test"})
    ))
  
(defn login-page []
  (selmer.parser/render-file "login.html" {:test "test"}))

(defn register-page []
  (selmer.parser/render-file "register.html" {:test "test"}))

(defn message-page [& hashed] 
  (selmer.parser/render-file "messages.html" {:messages (get-messages hashed)}))
                                              
(defn edit-page [id]
  (selmer.parser/render-file "edit.html" {:make (selector id)}))

(defn save-msg [request Name Email Message]
  (if-not (empty? Message)
  (let [hashed (dig/md5(string/lower-case(string/trim Email)))]
    (insert BIGBOI (values {:name Name :message Message :hash hashed }))
    (message-page hashed))
  (let [hashed (dig/md5(string/lower-case(string/trim Email)))] 
    (message-page hashed))))
  
(defn editing [id update]

  (sql-update BIGBOI
              (set-fields {:message update})
              (where {:id id}))

  (selmer.parser/render-file "edit.html" {:make (selector id)}))

(defn get-id []
  (select BIGBOI
          (fields :id)))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/index" [] (test-page))
  (POST "/" [name message] (save-message name message))
  (GET "/messages" [] (message-page))
  (GET "/messages/:id" [id] (edit-page id))
  (POST "/messages/:id" [id update] (editing id update))
  (GET "/login" [] (login-page))
  (GET "/register" [] (register-page))
  (POST "/Logged" [request LoginUser LoginPass]
        (login-handler request LoginUser LoginPass))
  (POST "/login" [User email Pass]
        (registerUser User email Pass))
  (POST "/messages" [request Name Email Message]
        (save-msg request Name Email Message)))


