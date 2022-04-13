package com.team26.todolist.domain;

import java.time.LocalDateTime;

public class History {

    private Long id;
    private CardAction cardAction;
    private String userId;
    private String cardTitle;
    private String cardTitleBefore;
    private String columnTitle;
    private String columnTitleBefore;
    private LocalDateTime createdAt;

    public void initId(Long id) {
        this.id = id;
    }

    private History(HistoryBuilder historyBuilder) {
        this.cardAction = historyBuilder.cardAction;
        this.userId = historyBuilder.userId;
        this.cardTitle = historyBuilder.cardTitle;
        this.cardTitleBefore = historyBuilder.cardTitleBefore;
        this.columnTitle = historyBuilder.columnTitle;
        this.columnTitleBefore = historyBuilder.columnTitleBefore;
        this.createdAt = historyBuilder.createdAt;
    }

    public static HistoryBuilder builder(CardAction cardAction, String userId,
            LocalDateTime createdAt) {
        return new HistoryBuilder(cardAction, userId, createdAt);
    }

    public static class HistoryBuilder {

        private CardAction cardAction;
        private String userId;
        private String cardTitle;
        private String cardTitleBefore;
        private String columnTitle;
        private String columnTitleBefore;
        private LocalDateTime createdAt;

        public HistoryBuilder(CardAction cardAction, String userId, LocalDateTime createdAt) {
            this.cardAction = cardAction;
            this.userId = userId;
            this.createdAt = createdAt;
        }

        public HistoryBuilder cardTitleBefore(String cardTitleBefore) {
            this.cardTitleBefore = cardTitleBefore;
            return this;
        }

        public HistoryBuilder cardTitle(String cardTitle) {
            this.cardTitle = cardTitle;
            return this;
        }

        public HistoryBuilder columnTitle(String columnTitle) {
            this.columnTitle = columnTitle;
            return this;
        }

        public HistoryBuilder columnTitleBefore(String columnTitleBefore) {
            this.columnTitleBefore = columnTitleBefore;
            return this;
        }

        public History build() {
            return new History(this);
        }
    }

    public CardAction getCardAction() {
        return cardAction;
    }

    public String getUserId() {
        return userId;
    }

    public String getCardTitle() {
        return cardTitle;
    }

    public String getCardTitleBefore() {
        return cardTitleBefore;
    }

    public String getColumnTitle() {
        return columnTitle;
    }

    public String getColumnTitleBefore() {
        return columnTitleBefore;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
