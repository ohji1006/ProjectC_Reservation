package kr.or.connect.reservation.dao;

import javax.sql.DataSource;

import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import kr.or.connect.reservation.dto.Price;
import kr.or.connect.reservation.dto.Reservation;

@Repository
public class ReservationDao {
	private SimpleJdbcInsert reservationInfoInsert;
	private SimpleJdbcInsert reservationInfoPriceInsert;
	
	public ReservationDao(DataSource dataSource) {
		reservationInfoInsert = new SimpleJdbcInsert(dataSource).withTableName("reservation_info").usingGeneratedKeyColumns("id");
		reservationInfoPriceInsert = new SimpleJdbcInsert(dataSource).withTableName("reservation_info_price").usingGeneratedKeyColumns("id");
	}
	
	public Long insertRservationInfo(Reservation reservation) {
		SqlParameterSource parameterSource = new BeanPropertySqlParameterSource(reservation);
		return reservationInfoInsert.executeAndReturnKey(parameterSource).longValue();
	}
	
	public Long insertReservationInfoPrice(Price price) {
		SqlParameterSource parameterSource = new BeanPropertySqlParameterSource(price);
		return reservationInfoPriceInsert.executeAndReturnKey(parameterSource).longValue();
	}
}
