(ns guestbookcljs.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [ajax.core :refer [GET POST]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.string :as string]))

(enable-console-print!)

(println "This text is printed from src/clj/guestbook/routes/core.cljs.
    Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(GET "/send-info" {:response-format :transit})

(defn name-comp [state owner]
    (reify
    om/IRender
        (render [_]
            (dom/p nil (:name state) " " (:message state)))))

(defonce app-state
  (atom
    {:contacts []
     :messages []}))

(defn getMessages [state]
    (GET "/send-info"
        {:response-format :transit
         :handler
            (fn [r]
                (om/transact! state :contacts (fn [_] r)))}))

(defn root-comp [state owner]
    (reify
    om/IWillMount
    (will-mount [this]
        (getMessages state))
    om/IRender
    (render [this]
        (dom/div nil (om/build-all name-comp (:contacts state))))))

(om/root root-comp app-state
  {:target (. js/document (getElementById "contacts"))})
