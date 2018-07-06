class Api::SearchesController < ApplicationController
  def index
    found = false
    if (params[:fname] && params[:fname].length > 0) || (params[:lname] && params[:lname].length > 0)
      @usernames= Invite.all.pluck(:username).map(&:downcase)
      @plusones= Invite.all.pluck(:plusone)
      @usernames.each do |username|
        found = true if username.include?(params[:fname].downcase)
        found = true if username.include?(params[:lname].downcase)
      end
      @plusones.each do |plusone|
        next if plusone == nil
        found = true if plusone.include?(params[:fname].downcase)
        found = true if plusone.include?(params[:lname].downcase)
      end
    end

    if found
      @first = []
      @last = []
      if params[:fname] && params[:fname].length > 0
        @first1 = Invite.where("username ILIKE ?", "%#{params[:fname]}%")
        @first2 = Invite.where("plusone ILIKE ?", "%#{params[:fname]}%")
        @first = (@first1 + @first2).uniq
      end
      if params[:lname] && params[:lname].length > 0
        @last1 = Invite.where("username ILIKE ?", "%#{params[:lname]}%")
        @last2 = Invite.where("plusone ILIKE ?", "%#{params[:lname]}%")
        @last = (@last1 + @last2).uniq
      end
      @invites = (@first + @last).uniq
    else
      @invites = []
    end
    render 'api/invites/index'
  end
end
