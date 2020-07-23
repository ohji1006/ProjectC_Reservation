package kr.or.connect.reservation.sql;

public class ReservationSql {
	public final static String SELECT_ALL_AT_EMAIL = "SELECT id as reservationInfoId, product_id, display_info_id, reservation_name, reservation_tel, reservation_email, reservation_date, cancel_flag, create_date, modify_date FROM connectdb.reservation_info as rsv_info where reservation_email = :email";
	public final static String SELECT_ALL_TICKET_AT_RSVINFOID = "SELECT rip.count as count, pp.price as price FROM connectdb.reservation_info_price as rip "
			+ "join product_price as pp on pp.id = rip.product_price_id " + "where reservation_info_id = :rsvInfoId";
}
